import React from 'react'

import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'
import { AGES } from '../../constants/ages'

const AgesList = () => {
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
            {AGES.map((age, index) => (
                <li key={age}>
                    <button onClick={handleButtonClick} data-gender={age}>
                        {index < AGES.length - 1
                            ? t('years', { years: age })
                            : `${age}`}
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default AgesList
