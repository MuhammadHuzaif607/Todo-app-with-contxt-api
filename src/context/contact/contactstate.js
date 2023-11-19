import React from 'react';
import ContactContext from './contactcontext';
import { useReducer } from 'react';
import ReducerMethod from './contactreducer';

const ContactState = ({ children }) => {
  const initialstate = {
    contacts: [
      {
        id: 0,
        name: 'Huzaif',
        email: 'huzaif@gmail.com',
      },
      {
        id: 1,
        name: 'Huzaif',
        email: 'huzaif@gmail.com',
      },
      {
        id: 2,
        name: 'Huzaif',
        email: 'huzaif@gmail.com',
      },
    ],
  };

  const [state, dispatch] = useReducer(ReducerMethod, initialstate);

  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {children}
    </ContactContext.Provider>
  );
};

export default ContactState;
