import React, { Suspense } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../Header/Header'
import Main from '../Main/Main'

const SharedLayout = () => {
    const location = useLocation()

    return (
        <>
            {location.pathname.includes('quiz') && <Header />}
            <Main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </Main>
        </>
    )
}

export default SharedLayout
