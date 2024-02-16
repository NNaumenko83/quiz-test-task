import React from 'react'
import { LOCALS } from '../../i18n/constants'
import { useNavigate } from 'react-router-dom'
import i18next from 'i18next'
import { ButtonsWrapper } from './LanguagesList.styled'

const LanguagesList = () => {
    const navigate = useNavigate()

    const handleButtonClick: React.MouseEventHandler<
        HTMLButtonElement
    > = event => {
        const lang = event.currentTarget.getAttribute('data-lang')
        if (lang) {
            i18next.changeLanguage(lang)
            navigate('/quiz/2')
        }
    }

    return (
        <>
            <ButtonsWrapper>
                {Object.values(LOCALS).map(lang => (
                    <li key={lang[1]}>
                        <button onClick={handleButtonClick} data-lang={lang[0]}>
                            {lang[1]}
                        </button>
                    </li>
                ))}
            </ButtonsWrapper>
        </>
    )
}

export default LanguagesList
