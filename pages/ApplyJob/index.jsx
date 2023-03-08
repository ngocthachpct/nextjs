import React from "react";
import style from './index.module.css'

export default function ApplyJob() {
    return (
        <div className={style.container}>
            <div className={style.center}>
                <h1>Job Application</h1>
                <form method={style.post}>
                    <div className={style.txt_field}>
                        <input type="text" required />
                        <span />
                        <label>First Name</label>
                    </div>
                    <div className={style.txt_field}>
                        <input type="text" required />
                        <span />
                        <label>Last Name</label>
                    </div>
                    <div className={style.txt_field}>
                        <input type="email" required />
                        <span />
                        <label>Email</label>
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
                    <div className={style.txt_field}>
                        <input type="text" required />
                        <span />
                        <label>Apply Position</label>
                    </div>
                    <p>Upload CV</p>
                    <input type="file" id="myFile" name="filename"></input>
                    <input className={style.Login} type="submit" value="Submit" />

                    <div className={style.signup_link}>
                        <a href="/">Back to homepage</a>
                    </div>
                    
                </form>
            </div>
        </div>
    );
}
