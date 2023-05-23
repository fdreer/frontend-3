import {styled} from 'styled-components';

const ButtonCalculate = styled.button`
  margin: 6px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
  }
`;

export default ButtonCalculate;
