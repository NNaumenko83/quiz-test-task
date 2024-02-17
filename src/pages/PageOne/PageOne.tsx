import Title from '../../components/Title/Title'
import LanguagesList from '../../components/LanguagesList/LanguagesList'

import Container from '../../components/Container/Container'
import Text from '../../components/Text/Text'

const PageOne = () => {
    return (
        <Container>
            <Title>What is your preferred language?</Title>
            <Text>Choose language</Text>
            <LanguagesList />
        </Container>
    )
}

export default PageOne
