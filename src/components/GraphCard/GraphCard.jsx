import styles from './GraphCard.module.css';

function GraphCard({ color, title, CustomGraph }) {
  const bulletstyles = {
    backgroundColor: color,
    width: '0.625rem',
    height: '1.9rem',
  };

  const textStyle = {
    color: color,
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.graph}>
        <CustomGraph className={styles.custom_graph} />
      </div>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <div style={bulletstyles} />
          <div style={textStyle}>{title}</div>
        </div>
      </div>
    </div>
  );
}

export default GraphCard;
