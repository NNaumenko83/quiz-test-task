import styled from 'styled-components'
import ContainerStyled from '../../components/Container/Container.styled'

export const GratitudeContainer = styled(ContainerStyled)`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Title = styled.h3`
    color: #ececfb;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2.5rem;
`

export const TitleThankYou = styled.span`
    font-family: 'Niconne-Regular';
    font-size: 2.25rem;

    line-height: 1.22;
`

export const TitleText = styled.span`
    font-family: 'AlbertSans-SemiBold';
    font-size: 1.0625rem;

    line-height: 1.47;
    letter-spacing: -1%;
`

export const InfoLink = styled.a`
    color: #eb2f9a;
    transition: color 250ms linear;

    &:hover {
        color: #ff5bf4;
    }
`

export const DownloadButton = styled.button`
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: #ececfb;
    font-family: 'AlbertSans-SemiBold';
    font-size: 1.0625rem;

    line-height: 1.47;
    letter-spacing: -1%;

    transition: color 250ms linear;

    &:hover {
        color: #e4229c;
    }
`

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.875rem;
    align-items: center;
    margin-top: 2.5rem;
`
