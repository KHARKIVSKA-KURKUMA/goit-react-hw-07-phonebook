import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  margin: 15px 0 30px;
  font-weight: 800;
  font-size: 2em;
`;
const SubTitle = styled.h2`
  text-align: center;
  margin: 15px 0 30px;
  font-weight: 800;
  font-size: 2em;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  gap: 30px;
`;

const Wrap = styled.div``;

export { Title, Container, Wrap, SubTitle };
