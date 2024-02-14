import React from 'react'
import Title from '../../components/Title/Title'
import LanguagesList from '../../components/LanguagesList/LanguagesList'
import { useTranslation } from 'react-i18next'

const Home = () => {
    const { t } = useTranslation()
    return (
        <div>
            <h2>{t('what_is_your_age')}</h2>
            Home
            <Title>What is your preffered language</Title>
            <LanguagesList />
        </div>
    )
}

export default Home
