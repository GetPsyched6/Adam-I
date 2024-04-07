import styles from './Legend.module.css';
function Legend(props) {
  const { content } = props;
  return (
    <div className={styles.wrapper}>
      <div>({content})</div>
    </div>
  );
}

export default Legend;
