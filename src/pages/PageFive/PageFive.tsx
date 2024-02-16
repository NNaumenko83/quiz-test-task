import { useEffect, useState } from 'react'

import FavoriteTopicsForm from '../../components/FavoriteTopicsForm/FavoriteTopicsForm'
import { Navigate } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'

const PageFive = () => {
    const [loading, setLoading] = useState(false)
    const [redirect, setRedirect] = useState(false)

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
        <div>
            {loading ? <Loader /> : <FavoriteTopicsForm loading={setLoading} />}
        </div>
    )
}

export default PageFive
