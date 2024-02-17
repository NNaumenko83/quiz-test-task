import { useContext } from 'react'
import { QuizContext, QuizContextProps } from '../context/QuizContext'

export const useQuiz = (): QuizContextProps => {
    const context = useContext(QuizContext)
    if (context === undefined) {
        throw new Error(
            'The usage of useQuiz should be within the scope of QuizProvider',
        )
    }
    return context
}
