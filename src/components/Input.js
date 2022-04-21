import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function Input() {
    const [checkEmailState, setEmailState] = useState({ state: false, visible: false });
    const [checkPasswordState, setPasswordState] = useState({ type: 'password', visible: false });

    function checkEmail(e) {
        setEmailState(() => {
            var email = e.target.value;
            if (email.length !== 0) {
                var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
                if (regExp.test(email) === true) {
                    return { state: true, visible: false };
                }
                else {
                    return { state: false, visible: true };
                }
            }
            return { state: false, visible: false };
        })
    }

    function checkPassword(e){
        setPasswordState(() => {
            if (checkPasswordState.visible === false) {
                return { type: 'text', visible: true };
            }
            return { type: 'password', visible: false };
        })
    }
 
    return (
        <div className='container'>
            <div className='Signup'>
                <h5 className='SignupTitle'>E-mail</h5>
                <div className='SignupInput'>
                    <input type='text' id='email' placeholder='E-mail' onKeyUp={checkEmail}></input>
                    <span className={'checkImg check' + checkEmailState.state}><FontAwesomeIcon icon={faCircleCheck} /></span>
                    {checkEmailState.visible ? <span className='checkMsg'>Invalid e-mail address.</span> : <span></span>}
                </div>
            </div>
            <div className='Signup'>
                <h5 className='SignupTitle'>Password</h5>
                <div className='SignupInput'>
                    <input type={checkPasswordState.type} id='password' placeholder='Password' />
                    <span className='checkImg' onClick={checkPassword}>
                        {checkPasswordState.visible ? <span className='checktrue'><FontAwesomeIcon icon={faEye} /></span> : <span className='checkfalse'><FontAwesomeIcon icon={faEyeSlash} /></span>}
                    </span>
                </div>
            </div>
        </div>
    )
}