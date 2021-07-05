import React, {useState, useEffect} from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

import './css/signup.css'

function Signup() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [birthday, setBirthday] = useState('')

    // Go to top useEffect
    useEffect(()=> {
        window.scrollTo(0, 0)
    }, [])
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
                    <form >
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
                            <input onChange={(e => setEmail(e.target.value))} type="email" name="email" value={email} required  />
                        </div>
                        <div className="form__group">
                            <label htmlFor="passowrd">password</label>
                            <input onChange={(e => setPassword(e.target.value))} type="password" name="password" value={password} required  />
                        </div>
                        <div className="form__group">
                            <label htmlFor="confirmPassword">confirm password</label>
                            <input onChange={(e => setConfirmPassword(e.target.value))} type="password" name="confirmPassword" value={confirmPassword} required  />
                        </div>
                        {/* newsLetter */}
                        <div className="border"></div>
                        <section className="newsLetter_sec">
                            <div className="title">
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
                            </div>
                            <div className="disclaimer">
                                <p>*By checking the SMS box, you are agreeing to receive texts from or on behalf of Burton, our family of companies, or one of its third-party associates, to any telephone number you provide. These texts could be sent using an automated telephone system. Agreement is not a requirement of purchase and you are free to opt-out at any time.</p>
                            </div>
                            <div className="terms">
                                <p>By continuing you agree to our <Link to="">Terms & Conditions </Link>. See out <Link to="">Privacy Notice</Link></p>
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
