//DONE
import style from './form.module.scss'
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio'
import { useSelector, useDispatch } from "react-redux";
// import { addContacts } from "redux/contacts/actions";
// import { addContacts } from 'redux/contacts/contactsSlice';
import { getContacts } from 'redux/contacts/selectors';
import { addContacts } from 'redux/contacts/operations';

export default function Form() {
    const {items} = useSelector(getContacts);
    const dispatch = useDispatch()

    const nameInputId = nanoid();
    const numberInputId = nanoid();

    const formSubmitHandle = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const { name, number } = e.currentTarget;
        console.log(name.value)
        const resultName = name.value.toLowerCase().split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
        const newContact = {
        id: nanoid(),
        name: resultName,
        number: number.value
        };
       
        dispatch(addContacts(newContact));
        form.reset();
    }
        // const { name, number } = e.target;
        // const resultName = name.value.toLowerCase().split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ');

        // const newContact = {
        // id: nanoid(),
        // name: resultName,
        // number: number.value
        // };
    
    // const getAllContactsNames = items.map(cont => cont.name);
    //     if (getAllContactsNames.includes(resultName)) {
    //         form.reset();
    //         return Notify.warning(`${resultName} is already in contacts`);
    //         } else {
    //         dispatch(addContacts(newContact.text));
    //         form.reset();
    //     }
    // }


    return (
        <form
            className={style.form__section}
            onSubmit={formSubmitHandle}
        >
            <label
                className={style.label__header}
                htmlFor={nameInputId}>Name
            </label>
            <input
                className={style.label__input}
                id={nameInputId}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            <label className={style.label__header}
                htmlFor={numberInputId}>Number</label>
            <input
                className={style.label__input}
                id={numberInputId}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />

            <button
                className={style.phonebook__button}
                type="submit">
                Add contact
            </button>
        </form>
        
    );


}



