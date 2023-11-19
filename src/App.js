import React from 'react';
import ContactState from './context/contact/contactstate';
import Contacts from './components/features/contact/contacts';

const App = () => {
  return (
    <ContactState>
      <div className="row">
        <Contacts />
      </div>
    </ContactState>
  );
};

export default App;
