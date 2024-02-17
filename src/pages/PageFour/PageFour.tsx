import ColorText from '../../components/ColorText/ColorText'
import Container from '../../components/Container/Container'
import HatesForm from '../../components/HatesForm/HatesForm'
import Title from '../../components/Title/Title'
import { useTranslation } from 'react-i18next'

const PageFour = () => {
    const { t } = useTranslation()
    return (
        <Container>
            <Title>
                {t('what_do_you_hate')}
                <ColorText> {t('hate')} </ColorText>
                {t('the_most_in_a_book')}?
            </Title>
            <HatesForm />
        </Container>
    )
}

export default PageFour
