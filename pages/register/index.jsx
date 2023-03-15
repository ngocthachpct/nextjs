import { useState, useContext, useEffect } from 'react'
import { postData } from '../../utils/fetchData'
import { useRouter } from 'next/router'
import { DataContext } from '../../store/GlobalState';
import { validAll } from './../../utils/valid';
import style from '../index.module.css'


const Register = () => {
    const initialState = { employee_id: '', email: '', password: '' }
    const [userData, setUserData] = useState(initialState)
    const { employee_id, email, password } = userData
    const { state, dispatch } = useContext(DataContext)
    const { auth } = state

    const router = useRouter()

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value
        });
        dispatch({ type: 'NOTIFY', payload: {} })
        console.log(value);
    }

    const handleSubmit = async e => {
        e.preventDefault()
        const errMsg = validAll(employee_id, email, password)
        if (errMsg) return dispatch({ type: 'NOTIFY', payload: { error: errMsg } })

        dispatch({ type: 'NOTIFY', payload: { loading: true } })

        const sleep = (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        (async () => {

            await sleep(3000)
            try {
                const response = await fetch('http://localhost:3001/auth/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userData)
                });
                const data = await response.json();
                //console.log(data); // In kết quả trả về từ API ra console để kiểm tra
                // Do something with the data here
                if (response.ok) {
                    (async () => {
                        dispatch({ type: 'NOTIFY', payload: { success: data.message } })
                        await sleep(1000)
                        dispatch({ type: 'NOTIFY', payload: { isHidden: 'hidden' } })
                        router.push('/login')
                    })()


                } else {
                    return dispatch({ type: 'NOTIFY', payload: { error: data.err } })

                }
            } catch (error) {
                console.error(error);

            }
        })()

    }

    useEffect(() => {
        if (Object.keys(auth).length !== 0) router.push("/")
    }, [auth])

    return (
        
            <div className={style.container}>
      <div className={style.center}>
                                    <h1>Register</h1>
                                    {/* <p className="account-subtitle">Access to our dashboard</p> */}
                                    <form onSubmit={handleSubmit}>
                                    <div className={style.txt_field}>
                                            <label>ID</label>
                                            <input type="text" name="employee_id" onChange={handleInputChange} value={userData.employee_id} required />
                                        </div>
                                        <div className={style.txt_field}>
                                            <label>Email Address</label>
                                            <input type="text" name="email" onChange={handleInputChange} value={userData.email} required />
                                        </div>
                                        <div className={style.txt_field}>
                                            <label>Password</label>
                                            <input type="text" name="password" onChange={handleInputChange} value={userData.password} required />
                                        </div>

                                        <div className="form-group mb-0">
                                            <button className={style.Login} type="submit">Register</button>
                                        </div>
                                        
                                    </form>
                                    <div className={style.signup_link}>
                        <a href="/">Back to homepage</a>
                    </div>
                                    
                                </div>
                            </div>

                    
    );
}

export default Register