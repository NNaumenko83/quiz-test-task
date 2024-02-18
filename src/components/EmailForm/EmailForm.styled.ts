import styled from 'styled-components'

type EmailProps = {
    isValid: boolean
}

export const StyledInput = styled.input<EmailProps>`
    width: 335px;
    height: 76px;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 21px 20px;

    border: 2px solid ${proops => (proops.isValid ? '#36173D' : '#d90800')};
    border-radius: 16px;
    background: rgb(54, 23, 61);

    color: rgb(255, 255, 255);
    font-family: 'AlbertSans-Medium';
    font-size: 17px;

    line-height: 1.17;
    letter-spacing: -1%;
`
export const ErrorWrapper = styled.div`
    height: 30px;
    display: flex;
    align-items: center;

    color: #d90800;
    font-family: 'AlbertSans-Medium';
    font-size: 15px;

    line-height: 1.46;
`

export const StyledForm = styled.form`
    margin-top: 1.875rem;
`
