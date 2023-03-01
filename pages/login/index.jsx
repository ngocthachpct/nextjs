import React from "react";
import style from './index.module.css'

export default function Login() {
    return (
        <div className={style.container}>
            <div className={style.center}>
                <h1>NextJS Company</h1>
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
                        Join us now! <a href="ApplyJob">Apply here</a>
                    </div>
                </form>
            </div>
        </div>
    );
}
