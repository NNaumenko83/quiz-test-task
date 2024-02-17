import React, { useState, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { getQuizFromLocalStorage } from '../../helpers/getQuizFromLocalStorage'
import {
    CheckBoxBorder,
    CheckIcon,
    CustomCheckBoxLabel,
    Form,
    StyledInput,
} from './HatesFor.styled'

const HATES: string[] = [
    'Lack of logic',
    'A slow speed',
    'Lack of humor',
    'Way too generic ending',
]

const HatesForm = () => {
    const [selectedHates, setSelectedHates] = useState<string[]>([])
    const quiz = useMemo(() => getQuizFromLocalStorage(), [])
    const navigate = useNavigate()

    useEffect(() => {
        const hatesFromLocalStorage: string[] = quiz?.hates || []
        setSelectedHates(hatesFromLocalStorage)
    }, [])

    const handleCheckboxChange = (hate: string): void => {
        const updatedHates: string[] = selectedHates.includes(hate)
            ? selectedHates.filter(item => item !== hate)
            : [...selectedHates, hate]

        setSelectedHates(updatedHates)
        localStorage.setItem(
            'quiz',
            JSON.stringify({ ...quiz, hates: updatedHates }),
        )
    }

    const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (
        e,
    ): void => {
        e.preventDefault()
        navigate('/quiz/5')
    }

    return (
        <div>
            <h2>Hates Checkbox</h2>
            <Form>
                {HATES.map((hate, index) => (
                    <CustomCheckBoxLabel
                        key={index}
                        htmlFor={`hate-${index}`}
                        checked={selectedHates.includes(hate)}
                    >
                        {hate}
                        <StyledInput
                            type="checkbox"
                            id={`hate-${index}`}
                            value={hate}
                            checked={selectedHates.includes(hate)}
                            onChange={() => handleCheckboxChange(hate)}
                        />
                        <CheckBoxBorder checked={selectedHates.includes(hate)}>
                            <CheckIcon checked={selectedHates.includes(hate)} />
                        </CheckBoxBorder>
                    </CustomCheckBoxLabel>
                ))}
                <button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={selectedHates.length === 0}
                >
                    Next
                </button>
            </Form>
        </div>
    )
}

export default HatesForm
