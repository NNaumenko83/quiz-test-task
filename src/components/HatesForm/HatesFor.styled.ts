import styled from 'styled-components'
import { FaCheck } from 'react-icons/fa'

type CheckBoxProps = {
    checked: boolean
}

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.9375rem;
`

export const CheckBoxBorder = styled.span<CheckBoxProps>`
    width: 1.4375rem;
    height: 1.4375rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;

    border: 1px solid rgb(228, 34, 155);
    border-radius: 8px;
    background: ${props => (props.checked ? '#E4229B' : '#6d4376')};

    transition: all 250ms linear;
`

export const StyledInput = styled.input`
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
`

export const CustomCheckBoxLabel = styled.label<CheckBoxProps>`
    width: 20.9375rem;
    height: 4.75rem;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 1.3125rem 1.25rem;

    border: 2px solid ${props => (props.checked ? '#E4229B' : '#36173D')};

    border-radius: 1rem;

    background: #36173d;

    font-family: 'NunitoSans-SemiBold';
    font-size: 1.0625rem;

    line-height: 1.4;
    letter-spacing: 0%;

    color: #ffffff;

    cursor: pointer;

    transition: all 250ms linear;
`
export const CheckIcon = styled(FaCheck)<CheckBoxProps>`
    width: 12px;
    height: 12px;
    transition: all 250ms linear;

    opacity: ${props => (props.checked ? '1' : '0')};
`
