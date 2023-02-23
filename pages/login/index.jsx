import React from "react";
import style from './index.module.css'

export default function Login() {
    return (
        <div className={style.container}>
            <div className={style.center}>
                <h1>Login</h1>
                <form method={style.post}>
                    <div className={style.txt_field}>
                        <input type="text" required />
                        <span />
                        <label>Username</label>
                    </div>
                    <div className={style.txt_field}>
                        <input type="password" required />
                        <span />
                        <label>Password</label>
                    </div>
                    <div className={style.pass}>Forgot Password?</div>
                    <input className={style.Login} type="submit" value="Login" />

                    <div className={style.signup_link}>
                        Not a member? <a href="#">Signup</a>
                    </div>
                    <div className={style.signup_link}>
                        <a href="index.html">Back</a>
                    </div>
                </form>
            </div>
        </div>
    );
}
