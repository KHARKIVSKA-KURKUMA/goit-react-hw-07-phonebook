import axios from 'axios';

axios.defaults.baseURL = 'https://64958045b08e17c917923130.mockapi.io';

export const getContact = async () => {
  const { data } = await axios.get(`/contacts`);
  return data;
};
export const postContact = async newContact => {
  const { data } = await axios.post('/contacts', newContact);
  return data;
};
export const deleteContact = async contactId => {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
};
export const putContact = async (contactId, updatedContact) => {
  const { data } = await axios.put(`/contacts/${contactId}`, updatedContact);
  return data;
};
