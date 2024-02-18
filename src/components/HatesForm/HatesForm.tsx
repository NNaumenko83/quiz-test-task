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
import { useTranslation } from 'react-i18next'
import { Button } from '../Button/Button'

const HATES: string[] = [
    'lack_of_logic',
    'a_slow_speed',
    'lack_of_humor',
    'way_too_generic_ending',
]

const HatesForm = () => {
    const [selectedHates, setSelectedHates] = useState<string[]>([])
    console.log('selectedHates:', selectedHates)
    const quiz = useMemo(() => getQuizFromLocalStorage(), [])
    const navigate = useNavigate()
    const { t } = useTranslation()

    useEffect(() => {
        const hatesFromLocalStorage: string[] = quiz?.hates || []
        setSelectedHates(hatesFromLocalStorage)
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <Form>
            {HATES.map((hate, index) => (
                <CustomCheckBoxLabel
                    key={index}
                    htmlFor={`hate-${index}`}
                    checked={selectedHates.includes(hate)}
                >
                    {t(`${hate}`)}
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
            <Button
                type="submit"
                onClick={handleSubmit}
                disabled={selectedHates.length === 0}
            >
                {t('next')}
            </Button>
        </Form>
    )
}

export default HatesForm
