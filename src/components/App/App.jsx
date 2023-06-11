import { ToastContainer } from 'react-toastify';
import { Title, Container, Wrap, SubTitle } from './App.styled';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from 'components/Filter/Filter';

const App = () => {
  return (
    <Container>
      <ToastContainer autoClose={1500} theme="colored" />
      <Wrap>
        <Title>Phonebook</Title>
        <ContactForm />
      </Wrap>
      <Wrap>
        <SubTitle>Contacts</SubTitle>
        <Filter />
        <ContactList></ContactList>
      </Wrap>
    </Container>
  );
};
export default App;
