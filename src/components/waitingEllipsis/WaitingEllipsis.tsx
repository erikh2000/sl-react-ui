import styles from './WaitingEllipsis.module.css';

function WaitingEllipsis() {
  return (
    <div className={styles.ellipsis}>
      <span key="0">.</span>
      <span key="1">.</span>
      <span key="2">.</span>
    </div>
  );
}

export default WaitingEllipsis;