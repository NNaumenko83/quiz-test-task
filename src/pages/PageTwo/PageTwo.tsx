import { useTranslation } from 'react-i18next'

import Container from '../../components/Container/Container'
import GenderList from '../../components/GendersList/GenderList'

import Text from '../../components/Text/Text'
import SmallTitle from '../../components/SmallTitle/SmallTitle'

const PageTwo = () => {
    const { t } = useTranslation()

    return (
        <Container>
            <SmallTitle>{t('what_gender_do_you_identify_with')}?</SmallTitle>
            <Text>{t('please_share_how_do_you_identify_yourself')}?</Text>
            <GenderList />
        </Container>
    )
}

export default PageTwo
