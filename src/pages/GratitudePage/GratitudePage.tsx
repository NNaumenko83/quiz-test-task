import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Parser } from '@json2csv/plainjs'
import { useAnswers } from '../../hooks/useAnswers'

const GratitudePage = () => {
    const navigate = useNavigate()

    const answers = useAnswers()

    const handleButtonClick = () => {
        localStorage.removeItem('quiz')
        navigate('/quiz/1')
    }

    const data: {
        Order: number
        title: string
        type: string
        answer: string
    }[] = []

    Object.keys(answers).forEach((key, index) => {
        const answer = answers[key].answer
        if (Array.isArray(answer)) {
            const concatenatedAnswer = answer.join(', ')
            data.push({
                Order: index + 1,
                title: key,
                type: answers[key].type,
                answer: concatenatedAnswer,
            })
        } else {
            data.push({
                Order: index + 1,
                title: key,
                type: answers[key].type,
                answer: answer,
            })
        }
    })

    const parser = new Parser()
    const csv = parser.parse(data)
    console.log('csv:', csv)

    const downloadCsv = () => {
        const blob = new Blob([csv], { type: 'text/csv' })
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'quiz_data.csv'
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
        document.body.removeChild(a)
    }
    return (
        <div>
            GratitudePage
            <button onClick={downloadCsv}>Download CSV</button>
            <button onClick={handleButtonClick}>Retake quiz</button>
        </div>
    )
}

export default GratitudePage
