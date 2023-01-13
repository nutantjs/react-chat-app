import React from 'react'
import style from "../styles/register.module.scss"

function registerComp() {
  return (
    <div className={style.form_container}>
      <div className={style.form_wrapper}>
        <span className={style.logo}>React Chat</span>
        <span className='title'>Register for chatss</span>
        <form>
          <input type="text" placeholder='display name' />
          <input type="email" placeholder='email' />
          <input type="password" placeholder='password' />
          <input type="file" />
          <span>add an avatar</span>
          <label htmlFor="file"></label>
          
          <button>Sign Up</button>
          <p>Do you have an account? <a href='login'>Login</a></p>
        </form>

      </div>
    </div>
  )
}

export default registerComp