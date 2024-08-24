import css from "./Feedback.module.css";

export default function Feedback({
  feedback: { good, neutral, bad },
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <ul className={css.container}>
      <li>Good : {good}</li>
      <li>Neutral : {neutral}</li>
      <li>Bad : {bad}</li>
      <li>Total : {totalFeedback}</li>
      <li>Positive: {positiveFeedback}%</li>
    </ul>
  );
}