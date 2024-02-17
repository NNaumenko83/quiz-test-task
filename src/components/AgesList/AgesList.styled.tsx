import styled from 'styled-components'

export const AgeButton = styled.button`
    width: 335px;
    height: 76px;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 1.3125rem 1.25rem;

    border: 2px solid rgb(54, 23, 61);
    border-radius: 16px;

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
export const ButtonsList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.9375rem;
`
