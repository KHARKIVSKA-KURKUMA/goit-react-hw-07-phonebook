import styled from 'styled-components';

const Notification = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8d7da;
  color: #721c24;
  border-radius: 5px;
  font-size: 23px;
  font-weight: bold;
  margin-top: 20px;
  padding: 20px;
  min-width: 300px;
`;
const ContactWrap = styled.div``;
const List = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const Items = styled.li`
  margin-bottom: 10px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Name = styled.p`
  font-weight: bold;
  margin-right: 10px;
`;

const Number = styled.p`
  font-size: 14px;
  color: gray;
`;

const DeleteButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 6px 10px;
  width: 65px;
`;
const EditButton = styled.button`
  background-color: #e5ff00;
  color: #000000;
  border: none;
  border-radius: 4px;
  padding: 6px 10px;
  width: 65px;
`;
const BtnWrap = styled.div`
  display: flex;
  gap: 10px;
  margin-left: auto;
  margin-right: 0;
`;
const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-width: 150px;
  margin-right: 6px;
`;
export {
  List,
  Items,
  Name,
  Number,
  DeleteButton,
  Container,
  EditButton,
  BtnWrap,
  Input,
  ContactWrap,
  Notification,
};
