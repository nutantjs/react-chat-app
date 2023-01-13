import React from 'react'
import style from "../styles/register.module.scss"

function registerComp() {
  return (
    <div className={style.form_container}>
      <div className={style.form_wrapper}>
        <span className={style.logo}>React Chat</span>
        <span className='title'>Login for chatss</span>
        <form>
          <input type="email" placeholder='email' />
          <input type="password" placeholder='password' />
          
          <button>Login</button>
          <p>Do you have not an account? <a href='./register'>Register</a></p>
        </form>

      </div>
    </div>
  )
}

export default registerComp