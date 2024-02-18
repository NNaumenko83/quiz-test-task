import { styled } from 'styled-components'

export const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 20.9375rem;
    height: 3.5rem;

    padding: 1rem 1rem;
    color: #ffffff;

    cursor: ${props => (props.disabled ? 'no-drop' : 'pointer')};

    background-color: #e4229c;
    opacity: ${props => (props.disabled ? '0.4' : '0.8')};
    transition: all 300ms linear;
    &:not(:disabled):hover,
    &:not(:disabled):focus {
        opacity: 1;
    }

    border-radius: 1000px;

    font-family: 'AlbertSans-ExtraBold';
    font-size: 17px;

    line-height: 1.5rem;
    letter-spacing: -1%;
`
