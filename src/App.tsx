import { Routes, Route, Navigate } from 'react-router-dom'
import { lazy } from 'react'
import './App.css'
import './i18n/i18n'
import SharedLayout from './components/SharedLayout/SharedLayout'

const PageOne = lazy(() => import('./pages/PageOne/PageOne'))
const PageTwo = lazy(() => import('./pages/PageTwo/PageTwo'))
const PageThree = lazy(() => import('./pages/PageThree/PageThree'))
const PageFour = lazy(() => import('./pages/PageFour/PageFour'))
const PageFive = lazy(() => import('./pages/PageFive/PageFive'))
const Email = lazy(() => import('./pages/Email/Email'))
const GratitudePage = lazy(() => import('./pages/GratitudePage/GratitudePage'))
const NotFound = lazy(() => import('./pages/NotFound/NotFound'))

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/quiz/1" />} />
                <Route path="/quiz" element={<SharedLayout />}>
                    <Route path="1" element={<PageOne />} />
                    <Route path="2" element={<PageTwo />} />
                    <Route path="3" element={<PageThree />} />
                    <Route path="4" element={<PageFour />} />
                    <Route path="5" element={<PageFive />} />
                </Route>

                <Route path="/email" element={<Email />} />
                <Route path="/gratitude" element={<GratitudePage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default App
