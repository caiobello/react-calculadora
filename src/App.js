import React from 'react';
import { Container, Content, Row } from './styles';
import Input from './Input';
import Button from './Button';
import { useState } from 'react';
import Footer from './Footer';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operator, setOperator] = useState('');

  const HandleClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperator('');
  };

  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => (prev === '0' ? number : prev + number));
  };

  const HandleOperation = (op) => {
    if (operator !== '') {
      HandleCalculateResult();
    }
    setOperator(op);
    setFirstNumber(currentNumber);
    setCurrentNumber('0');
  };

  const HandleDecimal = () => {
    if (!currentNumber.includes('.')) {
      setCurrentNumber((prev) => prev + '.');
    }
  };

  const HandleCalculateResult = () => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(currentNumber);
    let result = 0;

    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        return;
    }

    setCurrentNumber(result.toString());
    setFirstNumber(result.toString());
    setOperator('');
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />

        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="*" onClick={() => HandleOperation('*')} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="-" onClick={() => HandleOperation('-')} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="+" onClick={() => HandleOperation('+')} />
        </Row>
        <Row>
          <Button label="." onClick={HandleDecimal} />
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="&divide;" onClick={() => HandleOperation('/')} />
          <Button label="=" onClick={HandleCalculateResult} />
        </Row>
        <Row>
          <Button label="C" onClick={HandleClear} />
        </Row>

        <br></br>
        <Footer />
      </Content>

    </Container>
    
  );
};

export default App;
