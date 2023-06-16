import React, { useState } from 'react';
import { Input, Form, Label, Button } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { contactSelector } from 'store/selectors';
import { nanoid } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { postContactsThunk } from 'store/contacts/contactsThunks';

function ContactForm() {
  const { contacts } = useSelector(contactSelector);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const nameRegex =
    /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
  const numberRegex =
    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
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
      return;
    } else if (!nameRegex.test(name) || name.length <= 2) {
      toast.error(
        `${name} is invalid name! Add at least 3 letters without numbers`
      );
      return;
    } else if (!numberRegex.test(number)) {
      toast.error(`${number} is invalid number`);
      return;
    } else {
      const newContact = {
        id: nanoid(15),
        name,
        number,
      };
      dispatch(postContactsThunk(newContact));
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
