
import Container from '../Container/Container'
import { useLocation } from 'react-router-dom'
import { SlArrowLeft } from 'react-icons/sl'
import ProgressBar from '../ProgressBar/ProgressBar'
import {
    ActivePageText,
    ArrowLinkPageWrapper,
    StyledHeader,
    StyledLink,
    TitlePage,
    TotalPageText,
} from './Header.styled'

const Header = () => {
    const location = useLocation()
    const page = parseInt(location.pathname.split('/').reverse().join(''))

    return (
        <StyledHeader>
            <Container>
                <ArrowLinkPageWrapper>
                    {page > 1 && (
                        <StyledLink
                            to={`/quiz/${page - 1}`}
                            aria-labelledby="arrow"
                        >
                            <SlArrowLeft />
                        </StyledLink>
                    )}
                    <TitlePage>
                        <ActivePageText>{`${page}`}</ActivePageText>
                        <TotalPageText>&#8725;5</TotalPageText>
                    </TitlePage>
                </ArrowLinkPageWrapper>

                <ProgressBar page={page} />
            </Container>
        </StyledHeader>
    )
}

export default Header
