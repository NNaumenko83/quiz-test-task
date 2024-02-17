import { Suspense } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../Header/Header'
import Main from '../Main/Main'
import { useQuiz } from '../../hooks/useQuiz'

const SharedLayout = () => {
    const location = useLocation()
    const { loading } = useQuiz()
    console.log('loading:', loading)

    return (
        <>
            {location.pathname.includes('quiz') && !loading && <Header />}
            <Main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </Main>
        </>
    )
}

export default SharedLayout
