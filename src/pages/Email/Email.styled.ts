import styled from 'styled-components'
import ContainerStyled from '../../components/Container/Container.styled'

export const EmailContainer = styled(ContainerStyled)`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Text = styled.p`
    color: #c4c8cc;
    font-family: 'AlbertSans-Medium';
    font-size: 15px;
    line-height: 1.83;
    letter-spacing: 0%;
    text-align: center;
`

export const AgreementText = styled.p`
    font-family: 'AlbertSans-Medium';
    font-size: 12px;
    color: #ffffff;
    margin-top: 56px;

    line-height: 18px;
    letter-spacing: 0%;
    text-align: center;
`

export const InfoLink = styled.a`
    color: #eb2f9a;
    transition: color 250ms linear;

    &:hover {
        color: #ff5bf4;
    }
`
