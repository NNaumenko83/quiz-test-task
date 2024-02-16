import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getQuizFromLocalStorage } from '../../helpers/getQuizFromLocalStorage'
import { useTranslation } from 'react-i18next'
import { Parser } from '@json2csv/plainjs'

const GratitudePage = () => {
    const quiz = getQuizFromLocalStorage()
    console.log('quiz:', quiz)

    const { t } = useTranslation()
    const answers = {
        what: {
            type: 'string',
            answer: 'test',
        },
        why: {
            type: 'string',
            answer: 'test',
        },
        when: {
            type: 'string',
            answer: ['test1', 'test2'],
        },
    }

    // const answers = {
    //     [t('what_gender_do_you_identify_with')]: {
    //         type: 'string',
    //         answer: 'test',
    //     },
    // }
    console.log('answers:', answers)

    const navigate = useNavigate()
    const handleButtonClick = () => {
        localStorage.removeItem('quiz')
        navigate('/quiz/1')
    }

    /* ============ */
    const fields = ['Order', 'title', 'type', 'answer']
    const data = []

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

    console.log('data:', data)

    const parser = new Parser()
    const csv = parser.parse(data, { fields })
    console.log(csv)

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
