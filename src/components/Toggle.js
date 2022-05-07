import styles from './Toggle.module.scss'

export default function Toggle() {
  return (
    <div className='container'>
      <input type='checkbox' id='toggleTitle' />
      <label htmlFor='toggleTitle' className={styles.toggleLabel}>
        <div className={styles.toggleCheck} data-unchecked='기본' data-checked='상세'></div>
      </label>
    </div>
  )
}
