import styles from './rating.module.css'

export default function Rating(props) {
  return (
    <div className={styles["rating"]}>
      {Array.from(Array(props.on).keys()).map(i => (
        <img src="/star.svg" alt="star" width="32" height="32" className={styles["rating-star"]} key={`on-${i}`} />
      ))}

      {Array.from(Array(5 - props.on).keys()).map(i => (
        <img src="/star.svg" alt="star" width="32" height="32" className={styles["rating-star-off"]} key={`off-${i}`} />
      ))}
    </div>
  )
}