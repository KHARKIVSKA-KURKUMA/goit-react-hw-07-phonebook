import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContact, postContact, deleteContact, putContact } from 'API/featch';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    return await getContact();
  }
);
export const postContactsThunk = createAsyncThunk(
  'contacts/postContact',
  async newContact => {
    return await postContact(newContact);
  }
);
export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    return await deleteContact(contactId);
  }
);
export const putContactsThunk = createAsyncThunk(
  'contacts/editContact',
  async newContact => {
    const contactId = newContact.id;
    return await putContact(contactId, newContact);
  }
);
