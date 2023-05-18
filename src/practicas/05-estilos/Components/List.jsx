import styles from './List.module.css';

export default function List(props) {
  return <ul className={styles.list}>{props.children}</ul>;
}
