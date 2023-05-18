import styles from './Item.module.css';

export default function Item({children}) {
  return <li className={styles.item}>{children}</li>;
}
