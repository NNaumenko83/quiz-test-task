import { useTranslation } from 'react-i18next'
import EmailForm from '../../components/EmailForm/EmailForm'
import Main from '../../components/Main/Main'
import Title from '../../components/Title/Title'

import { EmailContainer, Text } from './Email.styled'

const Email = () => {
    const { t } = useTranslation()
    return (
        <Main>
            <EmailContainer>
                <Title>Email</Title>
                <Text>{t('enter_your_email_to_get_full_access')}</Text>
                <EmailForm />
            </EmailContainer>
        </Main>
    )
}

export default Email
