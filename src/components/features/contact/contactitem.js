import React, { useContext } from 'react';
import './style.css';
import ContactContext from '../../../context/contact/contactcontext';

const Contactitem = ({ id, name, email }) => {
  const createContext = useContext(ContactContext);
  const { currentcontact, deletecontact } = createContext;

  const Edithandler = () => {
    if (currentcontact) {
      currentcontact({
        name,
        email,
        id,
      });
    }
  };

  const Deletehandler = () => {
    if (currentcontact) {
      currentcontact({
        name,
        email,
        id,
      });
    }
    deletecontact(currentcontact);
  };

  return (
    <div className="card">
      <h1>Name: {name}</h1>
      <h2>Email: {email}</h2>
      <button onClick={Edithandler}>Edit</button>
      <button onClick={Deletehandler}>Delete</button>
    </div>
  );
};

export default Contactitem;
