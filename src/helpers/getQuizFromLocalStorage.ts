export const getQuizFromLocalStorage = () => {
    const quizString = localStorage.getItem('quiz')
    const quiz = quizString ? JSON.parse(quizString) : null
    return quiz
}
