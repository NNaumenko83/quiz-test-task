import Title from '../../components/Title/Title'
import LanguagesList from '../../components/LanguagesList/LanguagesList'
import { useTranslation } from 'react-i18next'

import Container from '../../components/Container/Container'
import Loader from '../../components/Loader/Loader'

const PageOne = () => {
    const { t } = useTranslation()

    return (
        <Container>
            <h2>{t('what_is_your_age')}</h2>
            Home
            <Title>What is your preferred language</Title>
            <LanguagesList />
            <Loader />
        </Container>
    )
}

export default PageOne
