import React, { useState } from 'react';
import { Input, Form, Label, Button } from './ContactForm.styled';
import { addContact } from 'store/contacts/contactSlice';
import { useDispatch, useSelector } from 'react-redux';
import { contactSelector } from 'store/selectors';
import { nanoid } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

function ContactForm() {
  const { contacts } = useSelector(contactSelector);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  /* ---------------------------------- CLEAN --------------------------------- */
  const cleanField = () => {
    setName('');
    setNumber('');
  };
  /* --------------------------------- SUBMIT --------------------------------- */
  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.find(contact => contact.name === name)) {
      toast.error(`${name} is already in your contacts!`);
    } else {
      const newContact = {
        id: nanoid(15),
        name,
        number,
      };
      dispatch(addContact(newContact));
    }
    cleanField();
  };
  /* --------------------------------- RENDER --------------------------------- */
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={e => setName(e.currentTarget.value)}
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={e => setNumber(e.currentTarget.value)}
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
}

export default ContactForm;
