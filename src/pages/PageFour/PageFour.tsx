import { useTranslation } from 'react-i18next'
import HatesForm from '../../components/HatesForm/HatesForm'

const PageFour = () => {
    const { t } = useTranslation()
    return (
        <div>
            <HatesForm />
        </div>
    )
}

export default PageFour
