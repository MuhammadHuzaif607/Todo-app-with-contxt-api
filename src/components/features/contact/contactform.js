import React, { useContext, useState, useEffect } from 'react';
import ContactContext from '../../../context/contact/contactcontext';

const ContactForm = () => {
  const [contact, setcontact] = useState({
    name: '',
    email: '',
    id: '',
  });

  const createcontext = useContext(ContactContext);
  const { addcontact, updatecontact, currentcontactdata } = createcontext;

  useEffect(() => {
    setcontact({
      name: currentcontactdata?.name ?? '',
      email: currentcontactdata?.email ?? '',
      phone: currentcontactdata?.phone ?? '',
      relation: currentcontactdata?.relation ?? '',
    });
  }, [currentcontactdata]);
  const Onchangehandler = (e) => {
    setcontact((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };

  const Onsubmithandler = (e) => {
    e.preventDefault();
    currentcontactdata !== null
      ? updatecontact({ id: currentcontactdata.id, ...contact })
      : addcontact(contact);
    setcontact({
      name: '',
      email: '',
    });
  };

  return (
    <div className="contact-form">
      <form action="" onSubmit={Onsubmithandler}>
        <div className="form-field">
          <input
            type="text"
            id="name"
            placeholder="Enter Your name"
            onChange={Onchangehandler}
            name="name"
            value={contact.name}
          />
        </div>
        <div className="form-field">
          <input
            type="email"
            id="email"
            placeholder="Enter Your email"
            onChange={Onchangehandler}
            name="email"
            value={contact.email}
          />
        </div>
        <div className="form-field">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
