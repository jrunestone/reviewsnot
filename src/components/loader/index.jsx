import styles from './loader.module.css'

export default function Loader() {
  return (
    <div className={styles["loader"]}>
      <div className={styles["lds-heart"]}><div></div></div>
    </div>
  )
}