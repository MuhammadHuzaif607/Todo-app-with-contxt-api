import React from 'react';
import { useContext } from 'react';
import ContactContext from '../../../context/contact/contactcontext';
import ContactItem from './contactitem';

const Contacts = () => {
  const contactcontext = useContext(ContactContext);
  const { contacts } = contactcontext;

  return contacts.map((data) => {
    return (
      <ContactItem
        key={data.id}
        id={data.id}
        name={data.name}
        email={data.email}
      />
    );
  });
};

export default Contacts;
