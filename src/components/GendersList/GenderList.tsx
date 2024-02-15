import React from 'react'
import { GENDERS } from '../../constants/genders'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'

const GenderList = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const quizString = localStorage.getItem('quiz')
    const quiz = quizString ? JSON.parse(quizString) : null

    const handleButtonClick: React.MouseEventHandler<
        HTMLButtonElement
    > = event => {
        const gender = event.currentTarget.getAttribute('data-gender')
        if (gender && quiz) {
            localStorage.setItem('quiz', JSON.stringify({ ...quiz, gender }))
            navigate('/quiz/3')
        }
    }

    return (
        <ul>
            {GENDERS.map(gender => (
                <li key={gender}>
                    <button onClick={handleButtonClick} data-gender={gender}>
                        {t(`${gender}`)}
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default GenderList
