import React from 'react'
import { GENDERS } from '../../constants/genders'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'
import { getQuizFromLocalStorage } from '../../helpers/getQuizFromLocalStorage'
import { ButtonsWrapper, GenderButton, StylesImage } from './GenderList.styled'

const GenderList = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const quiz = getQuizFromLocalStorage()

    const handleButtonClick: React.MouseEventHandler<
        HTMLButtonElement
    > = event => {
        const gender = event.currentTarget.getAttribute('data-gender')
        if (gender && quiz) {
            localStorage.setItem('quiz', JSON.stringify({ ...quiz, gender }))
            navigate('/quiz/3')
            return
        } else {
            localStorage.setItem('quiz', JSON.stringify({ gender }))
        }

        navigate('/quiz/3')
    }

    return (
        <ButtonsWrapper>
            {GENDERS.map(gender => (
                <li key={gender.type}>
                    <GenderButton
                        onClick={handleButtonClick}
                        data-gender={gender.type}
                    >
                        <StylesImage src={gender.image} width={48} />
                        {t(`${gender.type}`)}
                    </GenderButton>
                </li>
            ))}
        </ButtonsWrapper>
    )
}

export default GenderList
