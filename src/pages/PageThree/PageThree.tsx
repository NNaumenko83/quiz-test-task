import { useTranslation } from 'react-i18next'
import AgesList from '../../components/AgesList/AgesList'
import Title from '../../components/Title/Title'

const PageThree = () => {
    const { t } = useTranslation()
    return (
        <div>
            <Title>{t('what_is_your_age')}?</Title>

            <AgesList />
        </div>
    )
}

export default PageThree
