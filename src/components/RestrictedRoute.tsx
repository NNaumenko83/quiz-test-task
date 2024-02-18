import { Navigate, Outlet } from 'react-router-dom'
import { getQuizFromLocalStorage } from '../helpers/getQuizFromLocalStorage'

function RestrictedRoute() {
    const quiz = getQuizFromLocalStorage()

    return !quiz?.gender || !quiz?.age || !quiz?.hates || !quiz?.topics ? (
        <Navigate to={'/'} />
    ) : (
        <Outlet />
    )
}

export default RestrictedRoute
