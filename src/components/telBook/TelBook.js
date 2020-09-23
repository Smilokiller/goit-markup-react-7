import React, { useEffect } from "react";
import ContactList from "./telInput/ContactList";
import { CSSTransition } from "react-transition-group";
import { useDispatch } from "react-redux";
import FindInput from "./telInput/FindInput";
import styles from "./telBook.module.css";
import ContactForm from "./telInput/contactForm/ContactForm";
import { telBookReducers } from "../../redux/telBookReducers";
import telBookOperations from "../../redux/telBookOperations";

function TelBook() {
  const dispatch = useDispatch();
  const {
    actions: { filterContacts },
  } = telBookReducers;

  useEffect(() => {
    dispatch(telBookOperations.getContacts());
  }, []);

  return (
    <div className={styles.body}>
      <CSSTransition timeout={500} classNames={styles} appear unmountOnExit in>
        <div>
          <h2 className={styles.title}>Phonebook</h2>
        </div>
      </CSSTransition>
      <ContactForm />
      <h2 className={styles.title}>Contacts</h2>
      <FindInput
        onChange={(event) => dispatch(filterContacts(event.target.value))}
      />
      <ContactList />
    </div>
  );
}

export default TelBook;
