import React, { useState, useEffect, useMemo } from 'react'

import { getQuizFromLocalStorage } from '../../helpers/getQuizFromLocalStorage'
import { TOPICS } from '../../constants/topics'
import { Button } from '../Button/Button'
// import { useNavigate } from 'react-router-dom'

interface FavoriteTopicsFormProps {
    loading: (loading: boolean) => void
}

const FavoriteTopicsForm = ({ loading }: FavoriteTopicsFormProps) => {
    const [selectedTopics, setSelectedTopics] = useState<string[]>([])
    const quiz = useMemo(
        () => getQuizFromLocalStorage(),
        [selectedTopics.length],
    )

    const topicsArray = []

    for (let i = 0; i < TOPICS.length; i += 2) {
        if (i + 1 < TOPICS.length) {
            topicsArray.push([TOPICS[i], TOPICS[i + 1]])
            continue
        }
        topicsArray.push([TOPICS[i]])
    }
    console.log('topicsArray:', topicsArray)

    // const navigate = useNavigate()
    useEffect(() => {
        const topicsFromLocalStorage: string[] = quiz?.topics || []
        setSelectedTopics(topicsFromLocalStorage)
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
            return
        }
        console.log('Loading')
        loading(true)
    }

    return (
        <form>
            {topicsArray.map((item, index) => (
                <div key={index}>
                    {item.map((topic, subIndex) => (
                        <div key={subIndex}>
                            <input
                                type="checkbox"
                                id={`topic-${index}-${subIndex}`}
                                value={topic.type}
                                checked={selectedTopics.includes(topic.type)}
                                onChange={() =>
                                    handleCheckboxChange(topic.type)
                                }
                            />
                            <img
                                src={topic.image}
                                width={48}
                                alt={topic.type}
                            />
                            <label htmlFor={`topic-${index}-${subIndex}`}>
                                {topic.type}
                            </label>
                        </div>
                    ))}
                </div>
            ))}
            <Button
                type="submit"
                onClick={handleSubmit}
                disabled={
                    selectedTopics.length === 0 || selectedTopics.length > 3
                }
            >
                Next
            </Button>
        </form>
    )
}

export default FavoriteTopicsForm
