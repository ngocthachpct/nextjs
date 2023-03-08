import { useRouter } from 'next/router';
import React, { useState } from "react";
import style from './index.module.css'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const submitHandler = async (e) => {
        e.preventDefault();try{
        const response = await fetch('http://localhost:3001/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        //const data = await response.json();
        //console.log(data); // In kết quả trả về từ API ra console để kiểm tra
        // Do something with the data here
        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token',data.token);
            router.push('/dashboard');
          }else {
            // Set an error message if the login was unsuccessful
            setError('Invalid username or password');
        }
    } catch (error) {
        console.error(error);
        setError('Invalid username or password');
    }
    };
    return (
        <div className={style.container}>
            <div className={style.center}>
                <h1>NextJS Company</h1>
                <form onSubmit={submitHandler}>
                    <div className={style.txt_field}>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <span />
                        <label>Username</label>
                    </div>
                    <div className={style.txt_field}>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <span />
                        <label>Password</label>
                    </div>
                    <div className={style.pass}>Forgot Password?</div>
                    <input className={style.Login} type="submit" value="Login" />
                    <div className={style.error}>{error}</div>
                    <div className={style.signup_link}>
                        Join us now! <a href="applyJob">Apply here</a>
                    </div>
                </form>
            </div>
        </div>
    );
}