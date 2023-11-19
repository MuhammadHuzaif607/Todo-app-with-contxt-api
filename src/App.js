import React from 'react';
import ContactState from './context/contact/contactstate';
import Contacts from './components/features/contact/contacts';
import ContactForm from './components/features/contact/contactform';

const App = () => {
  return (
    <ContactState>
      <div className="row">
        <ContactForm />
      </div>
      <div className="row">
        <Contacts />
      </div>
    </ContactState>
  );
};

export default App;
