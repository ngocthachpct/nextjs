import { useState, useContext, useEffect } from 'react'
import { postData } from '../../utils/fetchData'
import { useRouter } from 'next/router'
import { DataContext } from '../../store/GlobalState';
import { validAll } from './../../utils/valid';


const Register = () => {
    const initialState = { employee_id: '', email: ''}
    const [userData, setUserData] = useState(initialState)
    const { employee_id, email } = userData
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
        

        dispatch({ type: 'NOTIFY', payload: { loading: true } })

        const sleep = (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        (async () => {

            await sleep(3000)
            try {
                const response = await fetch('http://localhost:3001/auth/forgot', {
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
        <div>
            <div className="main-wrapper login-body">
                <div className="login-wrapper">
                    <div className="container">
                        <img className="img-fluid logo-dark mb-2" src="/logo.png" alt="Logo" />
                        <div className="loginbox">
                            <div className="login-right">
                                <div className="login-right-wrap">
                                    <h1>Register</h1>
                                    <p className="account-subtitle">Access to our dashboard</p>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label className="form-control-label">ID</label>
                                            <input className="form-control" type="text" name="employee_id" onChange={handleInputChange} value={userData.employee_id} />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-control-label">Email Address</label>
                                            <input className="form-control" type="text" name="email" onChange={handleInputChange} value={userData.email} />
                                        </div>
                                       
                                        <div className="form-group mb-0">
                                            <button className="btn btn-lg btn-block btn-primary" type="submit">Register</button>
                                        </div>
                                    </form>
                                    <div className="login-or">
                                        <span className="or-line" />
                                        <span className="span-or">or</span>
                                    </div>
                                    <div className="social-login">
                                        <span>Register with</span>
                                        <a href="#" className="facebook"><i className="fab fa-facebook-f" /></a><a href="#" className="google"><i className="fab fa-google" /></a>
                                    </div>
                                    <div className="text-center dont-have">Already have an account? <a href="login.html">Login</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register