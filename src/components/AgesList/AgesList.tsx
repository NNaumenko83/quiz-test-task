import React, { useMemo } from 'react'

import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'
import { AGES } from '../../constants/ages'
import { getQuizFromLocalStorage } from '../../helpers/getQuizFromLocalStorage'
import { AgeButton, ButtonsList } from './AgesList.styled'
import Container from '../Container/Container'

const AgesList = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const quiz = useMemo(() => getQuizFromLocalStorage(), [])

    const handleButtonClick: React.MouseEventHandler<
        HTMLButtonElement
    > = event => {
        const age = event.currentTarget.getAttribute('data-age')
        if (age && quiz) {
            localStorage.setItem(
                'quiz',
                JSON.stringify({ ...quiz, age, topics: [] }),
            )
        } else {
            localStorage.setItem('quiz', JSON.stringify({ age }))
        }

        navigate('/quiz/4')
    }

    return (
        <Container>
            <ButtonsList>
                {AGES.map((age, index) => (
                    <li key={age}>
                        <AgeButton onClick={handleButtonClick} data-age={age}>
                            {index < AGES.length - 1
                                ? t('years', { years: age })
                                : `${age}`}
                        </AgeButton>
                    </li>
                ))}
            </ButtonsList>
        </Container>
    )
}

export default AgesList
