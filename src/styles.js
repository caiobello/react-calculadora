import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #b6deb9;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background-color: #ffffff;
  width: 80%;
  max-width: 400px; /* Limita a largura máxima para telas maiores */
  padding: 20px;

  @media (max-width: 768px) {
    width: 90%; /* Reduz a largura para telas menores, como celulares e tablets */
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonConatiner = styled.button`
  flex: 1;
  padding: 20px;
  font-size: 24px;
  font-weight: 700;
  background-color: #a6ada7;
  color: #ffffff;
  border: 1px solid #ffffff;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 55px;
  background-color: #b1ccb4;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 24px;
  font-family: 'Roboto';

  input {
    width: 100%;
    height: 100%;
    background-color: #b1ccb4;
    border: 0;
    padding: 0 10px;
    font-size: 24px;
    font-family: 'Roboto';
    color: #ffffff;
    text-align: right;
  }
`

;
