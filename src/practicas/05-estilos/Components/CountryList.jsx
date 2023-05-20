// import styles from './List.module.css';
import {styled} from 'styled-components';

// Con componente de React
// export default function List(props) {
//   return <CountryList>{props.children}</CountryList>;
// }

// Con styled-components
const CountryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  list-style: none;
  box-sizing: border-box;
`;
export default CountryList;
