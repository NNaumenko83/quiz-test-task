import React, { useState } from 'react'
import { emailRegexp } from '../../constants/regex'
import { useNavigate } from 'react-router-dom'
import { getQuizFromLocalStorage } from '../../helpers/getQuizFromLocalStorage'
import { ErrorWrapper, StyledForm, StyledInput } from './EmailForm.styled'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import { Button } from '../Button/Button'
import { useTranslation } from 'react-i18next'
import { sendUserData } from '../../services/api/api'
import { getLangFromLocalStorage } from '../../helpers/getLangFromLocalStorage'
import { Oval } from 'react-loader-spinner'
import { toast, Bounce } from 'react-toastify'

const EmailForm = () => {
    const [email, setEmail] = useState('')

    const [isValid, setIsValid] = useState(false)

    const navigate = useNavigate()
    const quiz = getQuizFromLocalStorage()
    const { t } = useTranslation()
    const [looading, setLoading] = useState(false)

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
        setEmail(e.target.value)

        if (!emailRegexp.test(e.target.value)) {
            setIsValid(false)
            return
        }
        setIsValid(true)
    }

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async e => {
        e.preventDefault()
        localStorage.setItem('quiz', JSON.stringify({ ...quiz, email }))
        const lang = getLangFromLocalStorage()

        if (lang) setLoading(true)
        {
            try {
                await sendUserData({
                    language: lang,
                    gender: t(quiz.gender),
                    age: quiz.age,
                    hate: quiz.hates.map((hate: string | string[]) => t(hate)),
                    topics: quiz.topics.map((topic: string | string[]) =>
                        t(topic),
                    ),
                    email: quiz.email,
                })

                navigate('/gratitude')
            } catch (error) {
                toast.error('Error', {
                    position: 'top-center',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                    transition: Bounce,
                })
            } finally {
                setLoading(false)
            }
        }
    }

    return (
        <>
            <StyledForm onSubmit={handleSubmit} autoComplete="on">
                <label htmlFor="email">
                    <StyledInput
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleChange}
                        $isvalid={isValid}
                        placeholder={t('your_email')}
                    />
                </label>
                <ErrorWrapper>
                    {!isValid && email && (
                        <ErrorMessage>{t('invalid_email')}</ErrorMessage>
                    )}
                </ErrorWrapper>

                <Button type="submit" disabled={!isValid || !email || looading}>
                    {looading ? (
                        <Oval
                            visible={true}
                            height="30"
                            width="30"
                            color="#ffffff"
                            ariaLabel="oval-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        />
                    ) : (
                        t('next')
                    )}
                </Button>
            </StyledForm>
        </>
    )
}

export default EmailForm
