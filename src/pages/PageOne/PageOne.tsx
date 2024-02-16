import Title from '../../components/Title/Title'
import LanguagesList from '../../components/LanguagesList/LanguagesList'
import { useTranslation } from 'react-i18next'

import Container from '../../components/Container/Container'

const PageOne = () => {
    const { t } = useTranslation()

    return (
        <Container>
            <Title>What is your preferred language</Title>
            <LanguagesList />
        </Container>
    )
}

export default PageOne
