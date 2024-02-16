import { Routes, Route, Navigate } from 'react-router-dom'
import { lazy } from 'react'
import './App.css'
import './i18n/i18n'
import SharedLayout from './components/SharedLayout/SharedLayout'
// import Email from './pages/Email/Email'
// import GratitudePage from './pages/GratitudePage/GratitudePage'
// import NotFound from './pages/NotFound/NotFound'

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
                <Route element={<SharedLayout />}>
                    <Route path="quiz/1" element={<PageOne />} />
                    <Route path="quiz/2" element={<PageTwo />} />
                    <Route path="quiz/3" element={<PageThree />} />
                    <Route path="quiz/4" element={<PageFour />} />
                    <Route path="quiz/5" element={<PageFive />} />
                </Route>

                <Route path="/email" element={<Email />} />
                <Route path="/gratitude" element={<GratitudePage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default App
