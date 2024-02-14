import React from 'react'
import Title from '../../components/Title/Title'

import { useTranslation } from 'react-i18next'

const PageThree = () => {
    const { t } = useTranslation()
    return (
        <div>
            <h2>{t('what_is_your_age')}</h2>
            Page three
            <Title>What is your preffered language</Title>
        </div>
    )
}

export default PageThree
