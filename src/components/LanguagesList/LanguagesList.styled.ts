import styled from 'styled-components'

export const ButtonsWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.9375rem;
`

export const LanguageButton = styled.button`
    width: 20.4375rem;
    height: 3.75rem;
    /* Auto layout */
    display: flex;

    align-items: center;
    padding: 0.75rem 1.25rem;

    border-radius: 1rem;
    background: #36173d;

    font-family: 'NunitoSans-SemiBold';
    font-size: 1.0625rem;

    line-height: 1.4;
    letter-spacing: 0%;

    color: #ffffff;
    transition: all 250ms linear;

    &:hover {
        transform: scale(1.05);
        color: #e4229c;
    }
`
