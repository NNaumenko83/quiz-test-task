import React from 'react'
import { useNavigate } from 'react-router-dom'

const GratitudePage = () => {
    const navigate = useNavigate()
    const handleButtonClick = () => {
        localStorage.removeItem('quiz')
        navigate('/quiz/1')
    }
    return (
        <div>
            GratitudePage
            <button onClick={handleButtonClick}>Retake quiz</button>
        </div>
    )
}

export default GratitudePage
