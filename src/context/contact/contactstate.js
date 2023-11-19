import React, { useId } from 'react';
import ContactContext from './contactcontext';
import { useReducer } from 'react';
import ReducerMethod from './contactreducer';
import {
  ADD_CONTACT,
  CURRENT_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
} from '../../type';

const ContactState = ({ children }) => {
  const id = useId();
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
    currentcontact: null,
  };
  //   add contact
  const addContactHandler = (data) => {
    dispatch({
      type: ADD_CONTACT,
      payload: {
        id: id + data.email,
        ...data,
      },
    });
  };
  const [state, dispatch] = useReducer(ReducerMethod, initialstate);

  // current contact
  const CurrentContactHandler = (data) => {
    console.log(data);
    dispatch({
      type: CURRENT_CONTACT,
      payload: data,
    });
  };

  // update contact
  const Updatehandler = (data) => {
    dispatch({
      type: UPDATE_CONTACT,
      payload: data,
    });
  };

  // delete contact

  const DeleteHandler = (data) => {
    dispatch({
      type: DELETE_CONTACT,
      payload: data,
    });
  };
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addcontact: addContactHandler,
        currentcontact: CurrentContactHandler,
        currentcontactdata: state.currentcontact,
        updatecontact: Updatehandler,
        deletecontact: DeleteHandler,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactState;
