import { useTranslation } from 'react-i18next'
import Main from '../../components/Main/Main'
import { NotFoundContainer, StyledLink } from './NotFound.styled'
import Title from '../../components/Title/Title'

const NotFound = () => {
    const { t } = useTranslation()
    return (
        <Main>
            <NotFoundContainer>
                <Title> {t('not_found')}</Title>
                <StyledLink to="/">{t('to_home')}</StyledLink>
            </NotFoundContainer>
        </Main>
    )
}

export default NotFound
