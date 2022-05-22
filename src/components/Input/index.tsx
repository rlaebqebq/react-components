import styles from './Input.module.scss'
import { useEffect, useState } from 'react'

import { CirclecheckIcon, EyesolidIcon, EyeslashIcon } from '../../assets/svgs'
import cx from 'classnames'

const Input = () => {
  const [email, setEmail] = useState('')
  const [, setPassword] = useState('')
  const [emailState, setEmailState] = useState({ state: false, warnMsg: false })
  const [passwordState, setPasswordState] = useState({ type: 'password', visible: false })

  useEffect(() => {
    const regExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (email.length > 0) {
      if (regExp.test(email)) {
        return setEmailState({ state: true, warnMsg: false })
      }
      return setEmailState({ state: false, warnMsg: true })
    }
    return setEmailState({ state: false, warnMsg: false })
  }, [email])

  const checkEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
  }

  const checkPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    setPassword(e.currentTarget.value)
    if (passwordState.visible) {
      return setPasswordState({ type: 'password', visible: false })
    }
    return setPasswordState({ type: 'text', visible: true })
  }

  return (
    <form className={styles.inputWrapper}>
      <div className={styles.signup}>
        <h5>E-mail</h5>
        <input type='text' id='email' placeholder='E-mail' onChange={checkEmail} />
        <span className={cx({ [styles.checktrue]: emailState.state }, styles.checkImg)}>
          <CirclecheckIcon />
        </span>
        {emailState.warnMsg && <span className={styles.checkMsg}>Invalid e-mail address.</span>}
      </div>
      <div className={styles.signup}>
        <h5>Password</h5>
        <input type={passwordState.type} id='password' placeholder='Password' />
        <button type='button' className={styles.checkImg} onClick={checkPassword}>
          <span className={cx({ [styles.checktrue]: passwordState.visible })}>
            {passwordState.visible ? <EyesolidIcon /> : <EyeslashIcon />}
          </span>
        </button>
      </div>
    </form>
  )
}

export default Input
