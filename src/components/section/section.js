//DONE
import style from './section.module.scss';
import PropTypes from "prop-types";

export default function Section({ title, children }) {
    return (
        <section className={style.phonebook}>
            <h1>{title}</h1>
            {children}
        </section>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired
}