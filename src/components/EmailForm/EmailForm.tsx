import React, { useState } from 'react'
import { emailRegexp } from '../../constants/regex'
import { useNavigate } from 'react-router-dom'

const EmailForm = () => {
    const [email, setEmail] = useState('')
    const [isValid, setIsValid] = useState(false)
    const navigate = useNavigate()

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
        setEmail(e.target.value)
        console.log(!emailRegexp.test(email))
        if (!emailRegexp.test(email)) {
            setIsValid(false)
            return
        }
        setIsValid(true)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (!emailRegexp.test(email)) {
            setIsValid(false)
        } else {
            console.log('Email is valid:', email)
            navigate('/gratitude')
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleChange}
                        style={{ border: isValid ? '' : '1px solid red' }}
                    />
                    {!isValid && <p style={{ color: 'red' }}>Invalid email</p>}
                </label>
                <button type="submit" disabled={!isValid}>
                    Next
                </button>
            </form>
        </>
    )
}

export default EmailForm
