import styled from 'styled-components'

export const ButtonsWrapper = styled.ul`
    width: 100%;
    padding: 0.75rem;
    justify-content: center;
    display: flex;
    gap: 1rem;
`

export const GenderButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    padding: 15px 0.75rem;

    width: 7.5rem;
    height: 7.5rem;

    font-family: 'NunitoSans-SemiBold';
    font-size: 1.0625rem;

    line-height: 1.4;
    letter-spacing: 0%;

    background: #36173d;
    border-radius: 0.75rem;

    color: #ffffff;
    transition: all 250ms linear;

    &:hover {
        transform: scale(1.05);
        color: #e4229c;
    }
`

export const StylesImage = styled.img`
    width: 50px;
    height: auto;
`
