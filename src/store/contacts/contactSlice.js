import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, { payload }) => {
      state.contacts = [payload, ...state.contacts];
    },
    removeContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
    updateContact: (state, { payload }) => {
      state.contacts = state.contacts.map(el => {
        if (el.id === payload.id) {
          return payload;
        }
        return el;
      });
    },
  },
});

export const contactReducer = contactSlice.reducer;
export const { addContact, removeContact, updateContact } =
  contactSlice.actions;
