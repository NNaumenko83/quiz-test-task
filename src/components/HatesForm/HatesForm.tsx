import React, { useState, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { getQuizFromLocalStorage } from '../../helpers/getQuizFromLocalStorage'

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

        console.log('AAAAAA')
        navigate('/quiz/5')
    }

    return (
        <div>
            <h2>Hates Checkbox</h2>
            <form>
                {HATES.map((hate, index) => (
                    <div key={index}>
                        <input
                            type="checkbox"
                            id={`hate-${index}`}
                            value={hate}
                            checked={selectedHates.includes(hate)}
                            onChange={() => handleCheckboxChange(hate)}
                        />
                        <label htmlFor={`hate-${index}`}>{hate}</label>
                    </div>
                ))}
                <button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={selectedHates.length === 0}
                >
                    Next
                </button>
            </form>
        </div>
    )
}

export default HatesForm
