import {styled} from 'styled-components';
import styles from './Item.module.css';

// Con componente de React
// export default function Item({children}) {
//   return (
//     // <li className={styles.item}>{children}</li>
//     <StyledItem>{children}</StyledItem>
//   );
// }

// Con styled-components
const StyledItem = styled.li`
  list-style: none;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: ${({children}) =>
    children === 'México' ? 'red' : 'blue'};
`;
export default StyledItem;
