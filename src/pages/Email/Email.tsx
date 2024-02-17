import EmailForm from '../../components/EmailForm/EmailForm'
import Main from '../../components/Main/Main'
import { EmailContainer } from './Email.styled'

const Email = () => {
    return (
        <Main>
            <EmailContainer>
                <EmailForm />
            </EmailContainer>
        </Main>
    )
}

export default Email
