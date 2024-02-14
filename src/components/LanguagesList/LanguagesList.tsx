import React from 'react'
import { LOCALS } from '../../i18n/constants'
import { useNavigate } from 'react-router-dom'
import i18next from 'i18next'

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
            <h3>{i18next.language}</h3>
            <ul>
                {Object.values(LOCALS).map(lang => (
                    <button
                        onClick={handleButtonClick}
                        data-lang={lang[0]}
                        key={lang[1]}
                    >
                        {lang[1]}
                    </button>
                ))}
            </ul>
        </>
    )
}

export default LanguagesList
