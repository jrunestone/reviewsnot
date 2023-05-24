import Rating from '../rating'
import styles from './review-card.module.css'

export default function ReviewCard(props) {
  return (
    <div className={styles["review-card"]}>
      <div className={styles["review-card-inner"]}>
        <Rating on={props.rating} />
        <hr />
        <p className={styles["review-card-text"]}>"{props.text}"</p>
      </div>
    </div>
  )
}