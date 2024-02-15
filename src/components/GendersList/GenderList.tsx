import React from 'react'
import { GENDERS } from '../../constants/genders'
import { useTranslation } from 'react-i18next'

const GenderList = () => {
    const { t } = useTranslation()
    return (
        <ul>
            {GENDERS.map(gender => (
                <li key={gender}>
                    <button>{t(`${gender}`)}</button>
                </li>
            ))}
        </ul>
    )
}

export default GenderList
