import Section from "./section";
import Contacts from "./contacts";
import Form from "./form/form";
import Filter from './filter'
// import { useSelector } from "react-redux";

export const App = () => {

  return (
    <Section title='Phonebook'>
      <Form />
        <Contacts title='Contacts'>
          <Filter />
        </Contacts>
    </Section>
  );
}



