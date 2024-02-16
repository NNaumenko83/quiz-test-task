import React, { useState, useEffect, useMemo } from 'react'

import { getQuizFromLocalStorage } from '../../helpers/getQuizFromLocalStorage'
// import { useNavigate } from 'react-router-dom'

const TOPICS: string[] = [
    'Werewolf',
    'Action',
    'Royal Obsession',
    'Billionaire',
    'Romance',
    'Young Adult',
]

interface FavoriteTopicsFormProps {
    loading: (loading: boolean) => void
}

const FavoriteTopicsForm = ({ loading }: FavoriteTopicsFormProps) => {
    const [selectedTopics, setSelectedTopics] = useState<string[]>([])
    const quiz = useMemo(
        () => getQuizFromLocalStorage(),
        [selectedTopics.length],
    )
    console.log('quiz:', quiz)

    // const navigate = useNavigate()
    useEffect(() => {
        const topicsFromLocalStorage: string[] = quiz?.topics || []
        setSelectedTopics(topicsFromLocalStorage)
    }, [])

    const handleCheckboxChange = (topic: string): void => {
        const updatedTopics: string[] = selectedTopics.includes(topic)
            ? selectedTopics.filter(item => item !== topic)
            : [...selectedTopics, topic]

        setSelectedTopics(updatedTopics)
        localStorage.setItem(
            'quiz',
            JSON.stringify({ ...quiz, topics: updatedTopics }),
        )
    }

    const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (
        e,
    ): void => {
        e.preventDefault()
        if (!quiz.gender || !quiz.age || !quiz.hates || !quiz.topics) {
            console.log('QUIZZZZ')
            return
        }
        console.log('Loading')
        loading(true)
    }

    return (
        <div>
            <h2>Topics Checkbox</h2>
            <form>
                {TOPICS.map((topic, index) => (
                    <div key={index}>
                        <input
                            type="checkbox"
                            id={`topic-${index}`}
                            value={topic}
                            checked={selectedTopics.includes(topic)}
                            onChange={() => handleCheckboxChange(topic)}
                        />
                        <label htmlFor={`topic-${index}`}>{topic}</label>
                    </div>
                ))}
                <button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={
                        selectedTopics.length === 0 || selectedTopics.length > 3
                    }
                >
                    Next
                </button>
            </form>
        </div>
    )
}

export default FavoriteTopicsForm
