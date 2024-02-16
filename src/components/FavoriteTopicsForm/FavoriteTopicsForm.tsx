import React, { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'

const TOPICS: string[] = [
    'Werewolf',
    'Action',
    'Royal Obsession',
    'Billionaire',
    'Romance',
    'Young Adult',
]

const FavoriteTopicsForm = () => {
    const [selectedTopics, setSelectedTopics] = useState<string[]>([])
    console.log('selectedTopics:', selectedTopics)
    const quizString = localStorage.getItem('quiz')
    const quiz = quizString ? JSON.parse(quizString) : null

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

        if (selectedTopics.length > 3) {
            console.log('More than three')
        }
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
                    disabled={selectedTopics.length === 0}
                >
                    Next
                </button>
            </form>
        </div>
    )
}

export default FavoriteTopicsForm
