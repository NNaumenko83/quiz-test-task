import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const SharedLayout = () => {
    return (
        <div>
            SharedLayout
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </div>
    )
}

export default SharedLayout
