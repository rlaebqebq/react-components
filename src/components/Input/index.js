import { useState } from 'react'
import styles from './Input.module.scss'
import { CirclecheckIcon, EyesolidIcon, EyeslashIcon } from '../../assets/svgs'
import clsx from 'clsx'

export default function Input() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [checkEmailState, setEmailState] = useState({ state: false, visible: false })
  const [checkPasswordState, setPasswordState] = useState({ type: 'password', visible: false })

  function checkEmail(e) {
    setEmailState(() => {
      const checkemail = e.target.value
      if (checkemail.length !== 0) {
        const regExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if (regExp.test(checkemail)) {
          return { state: true, visible: false }
        }
        return { state: false, visible: true }
      }
      return { state: false, visible: false }
    })
  }

  function checkPassword(e) {
    setPasswordState(() => {
      if (!checkPasswordState.visible) {
        return { type: 'text', visible: true }
      }
      return { type: 'password', visible: false }
    })
  }

  return (
    <div className='container'>
      <form>
        <div className={styles.signup}>
          <h5 className={styles.signupTitle}>E-mail</h5>
          <input type='text' id='email' placeholder='E-mail' onKeyUp={checkEmail} />
          <span className={clsx({[styles.checktrue]:!![checkEmailState.state]}, styles.checkImg)}>
            <CirclecheckIcon />
          </span>
          {checkEmailState.visible ? <span className={styles.checkMsg}>Invalid e-mail address.</span> : <span />}
        </div>
        <div className={styles.signup}>
          <h5 className={styles.signupTitle}>Password</h5>
          <input type={checkPasswordState.type} id='password' placeholder='Password' />
          <button type='button' className={styles.checkImg} onClick={checkPassword}>
            {checkPasswordState.visible ? (
              <span className={styles.checktrue}><EyesolidIcon /></span>
              ) : (
                <span><EyeslashIcon /></span>
              )}  
          </button>    
        </div>
      </form>
    </div>
  )
}
