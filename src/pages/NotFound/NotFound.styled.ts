import styled from 'styled-components'
import ContainerStyled from '../../components/Container/Container.styled'
import { Link } from 'react-router-dom'

export const NotFoundContainer = styled(ContainerStyled)`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const StyledLink = styled(Link)`
    color: #eb2f9a;
    font-family: 'AlbertSans-Medium';
    font-size: 12px;

    line-height: 18px;
    letter-spacing: 0%;
    text-align: center;
    transition: color 250ms linear;

    &:hover {
        color: #ff5bf4;
    }
`
