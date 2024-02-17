import { useTranslation } from 'react-i18next'

import Container from '../../components/Container/Container'
import GenderList from '../../components/GendersList/GenderList'
import Title from '../../components/Title/Title'
import Text from '../../components/Text/Text'

const PageTwo = () => {
    const { t } = useTranslation()

    return (
        <Container>
            <Title>{t('what_gender_do_you_identify_with')}?</Title>
            <Text>{t('please_share_how_do_you_identify_yourself')}?</Text>
            <GenderList />
        </Container>
    )
}

export default PageTwo
