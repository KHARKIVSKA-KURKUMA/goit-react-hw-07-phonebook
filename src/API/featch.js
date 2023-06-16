import axios from 'axios';

export const getContact = async () => {
  const { data } = await axios.get(
    `https://64875b69beba6297279081c7.mockapi.io/contacts`
  );
  return data;
};
export const postContact = async newContact => {
  const { data } = await axios.post(
    'https://64875b69beba6297279081c7.mockapi.io/contacts',
    newContact
  );
  return data;
};
export const deleteContact = async contactId => {
  const { data } = await axios.delete(
    `https://64875b69beba6297279081c7.mockapi.io/contacts/${contactId}`
  );
  return data;
};
export const putContact = async (contactId, updatedContact) => {
  const { data } = await axios.put(
    `https://64875b69beba6297279081c7.mockapi.io/contacts/${contactId}`,
    updatedContact
  );
  return data;
};
