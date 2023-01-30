//DONE
import React from "react";
import style from './filter.module.scss';
import { nanoid } from 'nanoid';
import { filterContacts } from "redux/contacts/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "redux/contacts/selectors";
// import { useSearchParams } from "react-router-dom";

const idForFilter = nanoid();

export default function Filter() {
    // const [searchParams, setSearchParams] = useSearchParams();
    // const contactName = searchParams.get("name");
    //
    const dispatch = useDispatch();
    const filter = useSelector(selectFilters);

    const changeFilter = e => {
        const name = e.target.value.toLowerCase();
        dispatch(filterContacts(name));
        // setSearchParams({ contactName: name })
    }

    

    return (
        <form className={style.filter__form}> 
            <label
                htmlFor={idForFilter}
                className={style.filter__title}>
                Find contact by name
            </label>
            <input
                className={style.filter__input}
                id={idForFilter}
                type="text"
                name="filter"
                onChange={changeFilter} 
                value={filter}
            />
        </form>
    )
}



