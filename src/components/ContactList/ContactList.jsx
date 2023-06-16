import { useDispatch, useSelector } from 'react-redux';
import { List, Items, Notification, ContactWrap } from './Contact.styled';
import ContactListItem from './ContactItem';
import { contactSelector, filterSelector } from 'store/selectors';
import { useEffect } from 'react';
import { getContactsThunk } from 'store/contacts/contactsThunks';

const ContactList = () => {
  const { contacts } = useSelector(contactSelector);
  const { filter } = useSelector(filterSelector);
  const dispatch = useDispatch();
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);
  /* -------------------------- GET FILTERED CONTACTS ------------------------- */
  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filteredArr = getFilteredContacts();
  /* -------------------------------------------------------------------------- */
  return (
    <ContactWrap>
      {filteredArr.length > 0 ? (
        <List>
          {filteredArr.map(({ id, name, number }) => (
            <Items key={id}>
              <ContactListItem id={id} name={name} number={number} />
            </Items>
          ))}
        </List>
      ) : (
        <Notification>You don't have contacts</Notification>
      )}
    </ContactWrap>
  );
};

export default ContactList;
