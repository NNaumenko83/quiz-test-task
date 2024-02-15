import { useTranslation } from 'react-i18next'

import Container from '../../components/Container/Container'
import GenderList from '../../components/GendersList/GenderList'

const PageTwo = () => {
    const { t } = useTranslation()

    return (
        <Container>
            <h2>{t('what_gender_do_you_identify_with')}</h2>
            <GenderList />
        </Container>
    )
}

export default PageTwo
