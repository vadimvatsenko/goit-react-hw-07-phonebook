import style from "./contacts.module.scss";
import PropTypes from 'prop-types';
import React from "react";
import { useEffect } from "react";
import { fetchContatcts } from "redux/contacts/operations";
import { useSelector, useDispatch } from "react-redux";
import { selectContacts, selectFilters } from "redux/contacts/selectors";
import { deleteContacts } from "redux/contacts/operations";
import FadeLoader from "react-spinners/FadeLoader";

const fadeLoaderCss = {
    position: 'absolute',
    right: '200px'
}

export default function Contacts({ title, children }) {
    const dispatch = useDispatch()
    const { items, isLoading, error } = useSelector(selectContacts);
    const filter = useSelector(selectFilters);
    const filterContacts = items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase())) 

    useEffect(() => {
    dispatch(fetchContatcts());
    }, [dispatch]);
        
    if (items.length < 1 ) {
        return (
            <div className={style.contacts__emty}>
                <h2>Missing contacts</h2>
            </div>
        );
    }
                
    return (
        <div className={style.contacts}>
            {isLoading && <div>
                <FadeLoader
                    color="#ffffff"
                    cssOverride={fadeLoaderCss}
                    height={10}
                    loading={true}
                    margin={10}
                    radius={20}
                    speedMultiplier={3}
                    width={20}
                />
        
            </div>}
            {error ? (<p>{error}</p>) :
                (<div>
                    <div>
                        <h2>{title}</h2>
                        {children}
                    </div>
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
                                        onClick={() => { dispatch(deleteContacts(id)) }}>
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                )}
        </div>
    );
};

Contacts.protoType = {
    title: PropTypes.string.isRequired,
}

