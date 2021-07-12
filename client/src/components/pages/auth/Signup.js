import React, {useState, useEffect} from 'react'
import axios from '../../../containers/axios';
import { Button } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'

import './css/signup.css'

function Signup() {
    let history = useHistory()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [birthday, setBirthday] = useState('');

    //Success states
    const [success, setSuccess] = useState(false)

    //error states
    const [passwordError, setPasswordError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')


    const formSubmitHandler = async (e) => {
        e.preventDefault()
        const newUser = {
            firstName,
            lastName,
            birthday,
            email,
            password,
            confirmPassword
        }
        await axios.post('/signup', newUser)
        .then((res)=>{
            setFirstName('')
            setLastName('')
            setBirthday('')
            setEmail('')
            setPassword('')
            setConfirmPassword('')
            setPassword('')
            setConfirmPassword('')
            setPasswordError('')
            setConfirmPasswordError('')
            setEmailError('')
            setSuccess(true)

        })
        .catch(error => {
            error.response.data.msg === 'Passwords do not match' ? setConfirmPasswordError(error.response.data.msg) : setConfirmPasswordError('')


        })
    }
    
    
    /// Error handling function
    
    const enailErrorHandler = async () => {
        await axios.get(`/user/email/${email}`)
        .then(res => {
            res && setEmailError('')
        })
        .catch(error => {
            setEmailError(error.response.data.msg)
        })
    }   

    //password input field
    const passwordErroCheckHandler = () => {
        password.length < 6 ?
        setPasswordError('The password most be atleast 6 characters long')
        : setPasswordError('')
    }
    
    // Confirm password input field
    const passwordMatchCheckHandler = () => {
        password !== confirmPassword ? 
        setConfirmPasswordError('Passwords do not match')
        : setConfirmPasswordError('')
    }

    // Go to top useEffect
    useEffect(()=> {
        window.scrollTo(0, 0)
    }, [success])
    return (
        <div className="auth signup">
            <div className="container">
                <header className="header">
                    <h2>create account</h2>
                </header>
                <section className="signup__form">
                    <div className="title">
                        <p>Don't have an account? No worries, creating one is quick and easy to do!</p>
                    </div>
                    {
                        success && 
                        <div className={`${success &&  "success_message"}`}>
                            <p>successfuly created your account</p>
                            <Button onClick={()=> history.push('/login')}>login</Button>
                        </div>
                    }
                    <form onSubmit={formSubmitHandler}>
                        <div className="form__group">
                            <label htmlFor="firstName">first name</label>
                            <input onChange={(e => setFirstName(e.target.value))} type="text" name="firstName" value={firstName} required  />
                        </div>
                        <div className="form__group">
                            <label htmlFor="lastName">last name</label>
                            <input onChange={(e => setLastName(e.target.value))} type="text" name="lastName" value={lastName} required  />
                        </div>
                        <div className="form__group">
                            <label htmlFor="birthday">Date of birth</label>
                            <input onChange={(e => setBirthday(e.target.value))} type="date" name="birthday" value={birthday} required  />
                        </div>
                        <div className="form__group">
                            <label htmlFor="email">email address</label>
                            <input onChange={(e => setEmail(e.target.value))} onBlur={enailErrorHandler} type="email" name="email" value={email} required  />
                            <div className={`${emailError && "error__alert"}`}>
                                <p>{emailError}</p>
                            </div>
                        </div>
                        <div className="form__group">
                            <label htmlFor="passowrd">password</label>
                            <input onChange={(e => setPassword(e.target.value))} onBlur={passwordErroCheckHandler} type="password" name="password" value={password} required  />
                            <p className="password__p">Password has to be at least 6 characters</p>
                            <div className={`${passwordError && "error__alert"}`}>
                                <p>{passwordError}</p>
                            </div>
                        </div>
                        <div className="form__group">
                            <label htmlFor="confirmPassword">confirm password</label>
                            <input onChange={(e=> setConfirmPassword(e.target.value))} onBlur={passwordMatchCheckHandler} type="password" name="confirmPassword" value={confirmPassword} required  />
                            <div className={`${confirmPasswordError && "error__alert"}`}>
                                <p>{confirmPasswordError}</p>
                            </div>
                        </div>
                        {/* newsLetter */}
                        <div className="border"></div>
                        <section className="newsLetter_sec">
                            {/* <div className="title">
                                <span>I'd like to receive exclusive discounts and news from Burton by:</span>
                            </div>
                            <div className="group__newsletter">
                                <input type="checkbox" name="email" required />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="group__newsletter">
                                <input type="checkbox" name="email" required />
                                <label htmlFor="email">Post</label>
                            </div>
                            <div className="group__newsletter">
                                <input type="checkbox" name="email" required />
                                <label htmlFor="email">SMS</label>
                            </div> */}
                            <div className="disclaimer">
                                <p>*By checking the SMS box, you are agreeing to receive texts from or on behalf of bkclothing, our family of companies, or one of its third-party associates, to any telephone number you provide. These texts could be sent using an automated telephone system. Agreement is not a requirement of purchase and you are free to opt-out at any time.</p>
                            </div>
                            <div className="terms">
                                <p>By continuing you agree to our <Link to="">Terms & Conditions </Link>. See out <Link to="">Privacy Notice</Link></p>
                                <input className="radio__agreement" type="checkbox" required  />
                            </div>
                        </section>

                        <div className="submit__btn">
                            <Button type="submit">create account</Button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default Signup
