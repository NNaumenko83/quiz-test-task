import React, { useState } from 'react'
import { emailRegexp } from '../../constants/regex'
import { useNavigate } from 'react-router-dom'
import { getQuizFromLocalStorage } from '../../helpers/getQuizFromLocalStorage'
import { ErrorWrapper, StyledForm, StyledInput } from './EmailForm.styled'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import { Button } from '../Button/Button'
import { useTranslation } from 'react-i18next'

const EmailForm = () => {
    const [email, setEmail] = useState('')
    const [isValid, setIsValid] = useState(false)
    const navigate = useNavigate()
    const quiz = getQuizFromLocalStorage()
    const { t } = useTranslation()

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
            <StyledForm onSubmit={handleSubmit}>
                <label htmlFor="email">
                    <StyledInput
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleChange}
                        isValid={isValid}
                        placeholder={t('your_email')}
                    />
                </label>
                <ErrorWrapper>
                    {!isValid && (
                        <ErrorMessage>{t('invalid_email')}</ErrorMessage>
                    )}
                </ErrorWrapper>

                <Button type="submit" disabled={!isValid}>
                    {t('next')}
                </Button>
            </StyledForm>
        </>
    )
}

export default EmailForm
