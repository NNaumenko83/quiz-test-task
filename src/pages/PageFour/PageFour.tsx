import React from 'react'
import Title from '../../components/Title/Title'

import { useTranslation } from 'react-i18next'

const PageFour = () => {
    const { t } = useTranslation()
    return (
        <div>
            <h2>{t('what_is_your_age')}</h2>
            Page four
            <Title>What is your preffered language</Title>
        </div>
    )
}

export default PageFour
