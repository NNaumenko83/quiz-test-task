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
        const age = event.currentTarget.getAttribute('data-age')
        if (age && quiz) {
            localStorage.setItem('quiz', JSON.stringify({ ...quiz, age }))
        } else {
            localStorage.setItem('quiz', JSON.stringify({ age }))
        }

        navigate('/quiz/4')
    }

    return (
        <ul>
            {AGES.map((age, index) => (
                <li key={age}>
                    <button onClick={handleButtonClick} data-age={age}>
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
