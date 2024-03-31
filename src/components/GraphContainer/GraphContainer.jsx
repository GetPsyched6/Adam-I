import styles from './GraphContainer.module.css';
function GraphContainer(props) {
  const Graph = props.Graph;
  const title = props.title;
  return (
    <div className={styles.graph_wrapper}>
      <div className={styles.graph}>
        <Graph />
      </div>
      <div className={styles.title_wrapper}>
        <div className={styles.hr}>
          <hr />
        </div>
        <div className={styles.title}>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
}

export default GraphContainer;
