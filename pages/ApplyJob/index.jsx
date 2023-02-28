import React from "react";
import style from './index.module.css'

export default function ApplyJob() {
    return (
        <div className={style.container}>
            <div className={style.center}>
                <h1>Apply CV</h1>
                <form method={style.post}>
                    <div className={style.txt_field}>
                        <input type="text" required />
                        <span />
                        <label>Full Name</label>
                    </div>
                    <div className={style.txt_field}>
                        <input type="date" required />
                        <span />
                        <label>DOB</label>
                    </div>
                    <div className={style.txt_field}>
                        <input type="text" required />
                        <span />
                        <label>Phone Number</label>
                    </div>
                    <div>UPLOAD CV HERE</div>
                    {/* <div className={style.pass}>Forgot Password?</div> */}
                    <input className={style.Login} type="submit" value="Submit" />

                    <div className={style.signup_link}>
                        <a href="Login">Back to homepage</a>
                    </div>
                    {/* <div className={style.signup_link}>
                        <a href="index.html">Back</a>
                    </div> */}
                </form>
            </div>
        </div>
    );
}
