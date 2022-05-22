import styles from './Toggle.module.scss'

const Toggle = () => {
  return (
    <>
      <input type='checkbox' id='toggleTitle' />
      <label className={styles.toggleLabel} htmlFor='toggleTitle'>
        <div className={styles.toggleCheck} data-unchecked='기본' data-checked='상세' />
      </label>
    </>
  )
}

export default Toggle
