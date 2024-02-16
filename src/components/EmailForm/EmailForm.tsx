import React, { useState } from 'react'
import { emailRegexp } from '../../constants/regex'
import { useNavigate } from 'react-router-dom'
import { getQuizFromLocalStorage } from '../../helpers/getQuizFromLocalStorage'

const EmailForm = () => {
    const [email, setEmail] = useState('')
    const [isValid, setIsValid] = useState(false)
    const navigate = useNavigate()
    const quiz = getQuizFromLocalStorage()

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
        setEmail(e.target.value)

        if (!emailRegexp.test(email)) {
            setIsValid(false)
            return
        }
        setIsValid(true)
    }

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault()
        localStorage.setItem('quiz', JSON.stringify({ ...quiz, email }))

        console.log('Email is valid:', email)
        navigate('/gratitude')
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
