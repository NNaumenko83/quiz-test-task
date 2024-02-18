import LanguagesList from '../../components/LanguagesList/LanguagesList'

import Container from '../../components/Container/Container'
import Text from '../../components/Text/Text'
import SmallTitle from '../../components/SmallTitle/SmallTitle'

const PageOne = () => {
    return (
        <Container>
            <SmallTitle>What is your preferred language?</SmallTitle>
            <Text>Choose language</Text>
            <LanguagesList />
        </Container>
    )
}

export default PageOne
