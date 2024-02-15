import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Main from '../Main/Main'

const SharedLayout = () => {
    return (
        <>
            <Header />
            <Main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </Main>
        </>
    )
}

export default SharedLayout
