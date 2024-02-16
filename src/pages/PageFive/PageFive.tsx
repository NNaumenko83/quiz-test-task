import React from 'react'
import Title from '../../components/Title/Title'

import { useTranslation } from 'react-i18next'
import FavoriteTopicsForm from '../../components/FavoriteTopicsForm/FavoriteTopicsForm'

const PageFive = () => {
    const { t } = useTranslation()
    return (
        <div>
            <h2>{t('what_is_your_age')}</h2>
            Page five
            <Title>What is your preffered language</Title>
            <FavoriteTopicsForm />
        </div>
    )
}

export default PageFive
