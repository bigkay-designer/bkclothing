import React, {useState, useEffect, useContext} from 'react'
import axios from '../../../containers/axios'
import {useHistory, Redirect} from 'react-router-dom'
import { Link} from '@material-ui/core'
import { CheckCircle } from '@material-ui/icons'
import {Button} from '@material-ui/core'
import './css/login.css'


function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [emailError, setEmailError] = useState('')
    let history = useHistory()

    // Form submit function
    const formSubmitHandler = async (e) => {
        e.preventDefault()
        const newUser = {
            email, 
            password
        }

       await  axios.post('/login', newUser)
        .then(res => {
            localStorage.setItem("authorization", `Bearer ${res.data.token}`)
            setEmail('')
            setPassword('')
            setEmailError('')
            setPasswordError('')
            return window.location.replace('myAccount');
        })
        .catch(error => {
            let errorMsg = error.response.data.msg 
            errorMsg === "No account with this email has been registered." ?
            setEmailError(errorMsg) : setEmailError('')

            errorMsg === 'You have entered the wrong password' ?
            setPasswordError(errorMsg) : setPasswordError('')
        })
        setPassword('')
    }

    // Go to top useEffect
    useEffect(()=> {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="login">
            {/* {user && <Redirect to='/myAccount' />} */}
            <header className="header">
                <h2>login</h2>
            </header>
            <div className="container">
                <section className="login__form">
                    <form onSubmit={formSubmitHandler}>
                         <div className="form__group">
                            <label htmlFor="email">email</label>
                            <input onChange={(e => setEmail(e.target.value))} type="email" name="email" value={email} required  />
                            <div className={`${emailError && "error__alert"}`}>
                                <p>{emailError}</p>
                            </div>
                        </div>
                        <div className="form__group">
                            <div className="wrapper">
                                <label htmlFor="password">passowrd</label>
                                <Link to=''>Forgot password</Link>
                            </div>
                            <input onChange={(e => setPassword(e.target.value))} type="password" name="password" value={password} required  />
                            <div className={`${passwordError && "error__alert"}`}>
                                <p>{passwordError}</p>
                            </div>
                        </div>
                        <div className="submit__btn">
                            <Button type="submit">log in</Button>
                        </div>
                    </form>
                </section>

                <section className="create__new__Account__form">
                    <div className="wrapper">
                        <div className="title">
                            <h2>I'm new to bkclothing </h2>
                            <p>Join the gang get all the member benefits</p>
                        </div>
                        <div className="submit__btn">
                            <Button onClick={()=> history.push('/signup')} type="submit">create account</Button>
                        </div>
                        <div className="value__for__signup">
                            <div className="group">
                                <CheckCircle className="icon" /> <span>speedy checkout</span>
                            </div>
                            <div className="group">
                                <CheckCircle className="icon" /> <span>quick order tracking</span>
                            </div>
                            <div className="group">
                                <CheckCircle className="icon" /> <span>access to offers and special events</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Login
