import styles from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, totalFeedback, positiveFeedback }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>Good: {good}</li>
        <li className={styles.item}>Neutral: {neutral}</li>
        <li className={styles.item}>Bad: {bad}</li>
        <li className={styles.item}>Total: {totalFeedback}</li>
        <li className={styles.item}>Positive: {positiveFeedback} %</li>
      </ul>
    </div>
  );
};

export default Feedback;
