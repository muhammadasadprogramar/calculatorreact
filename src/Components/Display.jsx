import styles from './Display.module.css'
const Display = ({displayValue}) => {
  return (
    <input type="text" placeholder="0" value={displayValue} readOnly className={styles.display}/>
  )
}

export default Display