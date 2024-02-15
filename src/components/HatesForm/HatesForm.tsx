import React, { useState, useEffect } from 'react'

const HATES: string[] = [
    'Lack of logic',
    'A slow speed',
    'Lack of humor',
    'Way too generic ending',
]

const HatesForm = () => {
    const [selectedHates, setSelectedHates] = useState<string[]>([])
    const quizString = localStorage.getItem('quiz')
    const quiz = quizString ? JSON.parse(quizString) : null

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

    const handleNextClick = (): void => {
        console.log('AAAAAA')
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
                <button type="button" onClick={handleNextClick}>
                    Next
                </button>
            </form>
        </div>
    )
}

export default HatesForm
