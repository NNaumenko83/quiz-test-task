import Title from '../../components/Title/Title'
import LanguagesList from '../../components/LanguagesList/LanguagesList'

import Container from '../../components/Container/Container'

const PageOne = () => {
    return (
        <Container>
            <Title>What is your preferred language?</Title>
            <LanguagesList />
        </Container>
    )
}

export default PageOne
