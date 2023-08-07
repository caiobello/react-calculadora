import { ButtonConatiner } from './styles';

const Button = ({label, onClick}) => {
    return (
      <ButtonConatiner onClick={onClick}>
        {label}
      </ButtonConatiner>
    );
  }
  
  export default Button;
  