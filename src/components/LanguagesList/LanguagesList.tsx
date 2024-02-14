import React from 'react'
import { LOCALS } from '../../i18n/constants'
// import { Link } from 'react-router-dom'
import i18next from 'i18next'

const LanguagesList = () => {
    return (
        <>
            <h3>{i18next.language}</h3>
            <ul>
                {/* {Object.values(language).map(lang =>
                <Link to={`/quiz?lang=${lang}`} key={lang}>
                    {lang}
                </Link>
            ))} */}
                {Object.values(LOCALS).map(lang => (
                    <button
                        disabled={i18next.language === lang[0]}
                        onClick={() => i18next.changeLanguage(lang[0])}
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
