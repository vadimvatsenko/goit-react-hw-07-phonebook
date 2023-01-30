import Section from "./section";
import Contacts from "./contacts";
import Form from "./form/form";
import Filter from './filter';
import { Routes, Route } from "react-router-dom";
// import { useSelector } from "react-redux";

export const App = () => {

  return (
    <Routes>
      <Route path="/" element={
        <Section title='Phonebook'>
      <Form />
        <Contacts title='Contacts'>
          <Filter />
        </Contacts>
      </Section>} />
    <Route path="*" element={<p>No Content</p>} />
    </Routes>
  );
}


