import { useTranslation } from 'react-i18next'
import EmailForm from '../../components/EmailForm/EmailForm'
import Main from '../../components/Main/Main'
import Title from '../../components/Title/Title'

import { AgreementText, EmailContainer, InfoLink, Text } from './Email.styled'

const Email = () => {
    const { t } = useTranslation()
    return (
        <Main>
            <EmailContainer>
                <Title>{t('email')}</Title>
                <Text>{t('enter_your_email_to_get_full_access')}</Text>
                <EmailForm />
                <AgreementText>
                    {t('by_continuing_i_agree_with')}
                    <InfoLink href="#"> {t('privacy_policy')} </InfoLink>
                    <br />
                    {t('and')}
                    <InfoLink href="#"> {t('terms_of_use')}.</InfoLink>
                </AgreementText>
            </EmailContainer>
        </Main>
    )
}

export default Email
