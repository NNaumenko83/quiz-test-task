import { Routes, Route, Navigate } from 'react-router-dom'
import { lazy } from 'react'
import './App.css'
import './i18n/i18n'
import SharedLayout from './components/SharedLayout/SharedLayout'
import { QuizProvider } from './context/QuizContext'
import RestrictedRoute from './components/RestrictedRoute'

// import GratitudePage from './pages/GratitudePage/GratitudePage'

const PageOne = lazy(() => import('./pages/PageOne/PageOne'))
const PageTwo = lazy(() => import('./pages/PageTwo/PageTwo'))
const PageThree = lazy(() => import('./pages/PageThree/PageThree'))
const PageFour = lazy(() => import('./pages/PageFour/PageFour'))
const PageFive = lazy(() => import('./pages/PageFive/PageFive'))
const Email = lazy(() => import('./pages/Email/Email'))
const NotFound = lazy(() => import('./pages/NotFound/NotFound'))
const GratitudePage = lazy(() => import('./pages/GratitudePage/GratitudePage'))

function App() {
    return (
        <QuizProvider>
            <Routes>
                <Route path="/" element={<Navigate to="/quiz/1" />} />
                <Route element={<SharedLayout />}>
                    <Route path="quiz/1" element={<PageOne />} />
                    <Route path="quiz/2" element={<PageTwo />} />
                    <Route path="quiz/3" element={<PageThree />} />
                    <Route path="quiz/4" element={<PageFour />} />
                    <Route path="quiz/5" element={<PageFive />} />

                    <Route element={<RestrictedRoute />}>
                        <Route path="email" element={<Email />} />
                        <Route path="gratitude" element={<GratitudePage />} />
                    </Route>
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </QuizProvider>
    )
}

export default App
