import React, { useState, useEffect, useMemo } from 'react'

import { getQuizFromLocalStorage } from '../../helpers/getQuizFromLocalStorage'
import { TOPICS } from '../../constants/topics'
import { Button } from '../Button/Button'
import {
    CustomCheckBoxLabel,
    InnerInputsWrapper,
    InputsWrapper,
    StyledInput,
} from './FavoriteTopicsForm.styled'
import { useTranslation } from 'react-i18next'

// import { useNavigate } from 'react-router-dom'

interface FavoriteTopicsFormProps {
    loading: (loading: boolean) => void
}

const FavoriteTopicsForm = ({ loading }: FavoriteTopicsFormProps) => {
    const [selectedTopics, setSelectedTopics] = useState<string[]>([])
    const quiz = useMemo(
        () => getQuizFromLocalStorage(),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [selectedTopics.length],
    )

    const { t } = useTranslation()
    const topicsArray = []

    for (let i = 0; i < TOPICS.length; i += 2) {
        console.log('TOPICS.length:', TOPICS.length)
        if (i + 1 < TOPICS.length) {
            topicsArray.push([TOPICS[i], TOPICS[i + 1]])
            continue
        }
        topicsArray.push([TOPICS[i]])
    }
    console.log('topicsArray:', topicsArray)

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

        loading(true)
    }

    return (
        <form>
            <InputsWrapper>
                {topicsArray.map((item, index) => (
                    <InnerInputsWrapper key={index}>
                        {item.map((topic, subIndex) => (
                            <CustomCheckBoxLabel
                                htmlFor={`topic-${index}-${subIndex}`}
                                checked={selectedTopics.includes(topic.type)}
                                key={subIndex}
                            >
                                <StyledInput
                                    type="checkbox"
                                    id={`topic-${index}-${subIndex}`}
                                    value={topic.type}
                                    checked={selectedTopics.includes(
                                        topic.type,
                                    )}
                                    onChange={() =>
                                        handleCheckboxChange(topic.type)
                                    }
                                />
                                <img
                                    src={topic.image}
                                    width={25}
                                    alt={topic.type}
                                />
                                {t(topic.type)}
                            </CustomCheckBoxLabel>
                        ))}
                    </InnerInputsWrapper>
                ))}
            </InputsWrapper>

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
