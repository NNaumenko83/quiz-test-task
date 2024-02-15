import { useTranslation } from 'react-i18next'
import AgesList from '../../components/AgesList/AgesList'

const PageThree = () => {
    const { t } = useTranslation()
    return (
        <div>
            <h2>{t('what_is_your_age')}</h2>
            <AgesList />
        </div>
    )
}

export default PageThree
