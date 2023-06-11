import { PropTypes } from 'prop-types';
import {
  Name,
  Number,
  DeleteButton,
  Container,
  EditButton,
  BtnWrap,
  Input,
} from './Contact.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeContact, updateContact } from 'store/contacts/contactSlice';

const ContactListItem = props => {
  /* ---------------------------------- STATE --------------------------------- */
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const [name, setName] = useState(props.name);
  const [number, setNumber] = useState(props.number);
  /* ------------------------------- HANDLE EDIT ------------------------------ */
  const handleEdit = () => {
    if (isEdit) {
      if (name !== props.name || number !== props.number) {
        const updatedContact = {
          id: props.id,
          name,
          number,
        };
        dispatch(updateContact(updatedContact));
      }
    }
    setIsEdit(prev => !prev);
  };

  /* --------------------------------- RENDER --------------------------------- */
  return (
    <Container>
      {isEdit ? (
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          placeholder="Name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={e => setName(e.currentTarget.value)}
          required
        />
      ) : (
        <Name>{props.name}:</Name>
      )}

      {isEdit ? (
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          placeholder="Number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={e => setNumber(e.currentTarget.value)}
          required
        />
      ) : (
        <Number>{props.number}</Number>
      )}
      <BtnWrap>
        {!isEdit && (
          <DeleteButton
            type="button"
            onClick={() => dispatch(removeContact(props.id))}
          >
            Delete
          </DeleteButton>
        )}
        <EditButton
          type={isEdit ? 'submit' : 'button'}
          onClick={() => handleEdit()}
        >
          {isEdit ? 'Save' : 'Edit'}
        </EditButton>
      </BtnWrap>
    </Container>
  );
};

ContactListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactListItem;
