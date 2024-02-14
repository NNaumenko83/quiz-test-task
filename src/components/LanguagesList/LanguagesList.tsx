import React from 'react'
import { language } from '../../constans/languages'
import { Link } from 'react-router-dom'

const LanguagesList = () => {
    console.log('language:', Object.entries(language))

    return (
        <ul>
            {Object.values(language).map(lang => (
                <Link to={`/quiz?lang=${lang}`} key={lang}>
                    {lang}
                </Link>
            ))}
        </ul>
    )
}

export default LanguagesList
