import style from "./contacts.module.scss";
import PropTypes from 'prop-types';
import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { delContacts } from "redux/contacts/actions";
import { delContacts } from "redux/contacts/contactsSlice";
import { getContacts, getFilters } from "redux/contacts/selectors";

export default function Contacts({ title, children }) {
    const dispatch = useDispatch()
    const { items, isLoading, error } = useSelector(getContacts);
    const filter = useSelector(getFilters);

    const filterContacts = items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase())) 
    //
        
        if (items.length < 1 ) {
            return (
                <div className={style.contacts__emty}>
                    <h2>Missing contacts</h2>
                </div>
            );
        }
                
        return (
            
            <div className={style.contacts}>
            
                <h2>{title}</h2>
                {children}
                <div className={style.contacts__wrap}>
           
                    <ul
                        className={style.contacts__list}>
                        {filterContacts.map(({ id, name, number }) => (
                            <li key={id} className={style.contacts__item}>
                                <p>{name}</p>
                                <p>{number}</p>
                                <button
                                    className={style.contacts__button}
                                    type='button'
                                    onClick={() => { dispatch(delContacts(id)) }}
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
};

Contacts.protoType = {
    title: PropTypes.string.isRequired,
}

