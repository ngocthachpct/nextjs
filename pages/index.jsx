import { useRouter } from 'next/router';
import React, { useState, useContext } from "react";
import style from './index.module.css'
import { setCookie } from 'cookies-next';
import { validLogin } from './../utils/valid';
import { DataContext } from './../store/GlobalState';

export default function Login() {

  const initialState = { email: '', password: '' }
  const [userData, setUserData] = useState(initialState)
  const { email, password } = userData
  const { state, dispatch } = useContext(DataContext)
  const { auth } = state

  const router = useRouter()

  const forgotPassword = () =>{
      alert('Please check your email')
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value
    });
    dispatch({ type: 'NOTIFY', payload: {} })
    //console.log(value);
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const errMsg = validLogin(email, password)
    if (errMsg) return dispatch({ type: 'NOTIFY', payload: { error: errMsg } })

    dispatch({ type: 'NOTIFY', payload: { loading: true } })

    const sleep = (ms) => {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    (async () => {

      await sleep(3000)
      try {
        const response = await fetch('http://localhost:3001/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        });
        const data = await response.json();

        //console.log(`token: ${data.token}`); // In kết quả trả về từ API ra console để kiểm tra
        // Do something with the data here
        if (response.ok) {
          setCookie('id', data.user.id)
          setCookie('token', data.token);

          (async () => {
            var userInfo = { 'email': data.user.email, 'id': data.user.id };
            localStorage.setItem('userInfo', JSON.stringify(userInfo))
            await sleep(2000)
            dispatch({ type: 'NOTIFY', payload: { isHidden: 'hidden' } })
            router.push('/dashboard')
          })()


        } else {
          return dispatch({ type: 'NOTIFY', payload: { error: data.err } })

        }
      } catch (error) {
        console.error(error);

      }
    })()

  }

  return (
    <div className={style.container}>
      <div className={style.center}>
        <h1>High Tech Company</h1>
        <form onSubmit={handleSubmit}>
          <div className={style.txt_field}>
            <input type="text" name="email" onChange={handleInputChange} value={userData.email} required />
            <span />
            <label>Email</label>
          </div>
          <div className={style.txt_field}>
            <input type="password" name="password" onChange={handleInputChange} value={userData.password} required />
            <span />
            <label>Password</label>
          </div>
          <div className="col-6 text-right mb-3">
<a className="forgot-link" onClick={forgotPassword} href="#">Forgot Password ?</a>
</div>
<div className="text-center dont-have mb-2">Don't have an account yet? <a href="/register">Register</a></div>
          <input className={style.Login} type="submit" value="Login" />
          <div className={style.signup_link}>
            Join us now! <a href="ApplyJob">Apply</a>
          </div>
        </form>
      </div>
    </div>
  );
}