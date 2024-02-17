import { useEffect, useState } from 'react'

import FavoriteTopicsForm from '../../components/FavoriteTopicsForm/FavoriteTopicsForm'
import { Navigate } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'
import Container from '../../components/Container/Container'
import { useTranslation } from 'react-i18next'
import Title from '../../components/Title/Title'
import Text from '../../components/Text/Text'

const PageFive = () => {
    const [loading, setLoading] = useState(false)
    const [redirect, setRedirect] = useState(false)
    const { t } = useTranslation()

    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setLoading(false)
                setRedirect(true)
            }, 5500)
        }
    }, [loading])

    if (redirect) {
        return <Navigate to="/email" />
    }

    return (
        <Container>
            <Title>{t('what_are_your_favorite_topics')}?</Title>
            <Text>{t('choose_up_to_3_topics_you_like')}</Text>
            {loading ? <Loader /> : <FavoriteTopicsForm loading={setLoading} />}
        </Container>
    )
}

export default PageFive
