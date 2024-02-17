import styled from 'styled-components'

type CheckBoxProps = {
    checked: boolean
}

export const LabelText = styled.p`
    color: #ffffff;
    font-family: 'NunitoSans-SemiBold';
    font-size: 13px;

    line-height: 1.23;
    letter-spacing: 0.6%;
    text-align: center;
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
    width: 88px;
    height: 88px;

    padding: 0.3125rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.375rem;

    border: 2px solid ${props => (props.checked ? '#E4229B' : '#36173D')};

    border-radius: 694.4375rem;

    background: #36173d;

    color: #ffffff;
    font-family: 'NunitoSans-SemiBold';
    font-size: 0.75rem;

    line-height: 1.23;
    letter-spacing: 0.6%;
    text-align: center;

    cursor: pointer;

    transition: all 250ms linear;
`

export const InputsWrapper = styled.div`
    height: 208px;
    display: flex;
    gap: 0.4375rem;
    margin-bottom: 80px;

    & > :nth-child(2n) {
        margin-top: 25px;
    }
`

export const InnerInputsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`
