import React from 'react'

import { useTranslation } from 'react-i18next'

const PageTwo = () => {
    const { t } = useTranslation()
    return (
        <div>
            <h2>{t('what_is_your_age')}</h2>
            Page two
        </div>
    )
}

export default PageTwo
