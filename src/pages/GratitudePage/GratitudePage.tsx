import { useNavigate } from 'react-router-dom'
import { Parser } from '@json2csv/plainjs'
import { useAnswers } from '../../hooks/useAnswers'
import Main from '../../components/Main/Main'
import {
    ButtonsWrapper,
    DownloadButton,
    GratitudeContainer,
    Title,
    TitleText,
    TitleThankYou,
} from './GratitudePage.styled'
import checkMark from '../../assets/images/checkmark.png'
import { PiDownloadSimple } from 'react-icons/pi'
import { Button } from '../../components/Button/Button'
import { useTranslation } from 'react-i18next'

const GratitudePage = () => {
    const navigate = useNavigate()

    const answers = useAnswers()

    const { t } = useTranslation()

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
        <Main>
            <GratitudeContainer>
                <Title>
                    <TitleThankYou>{t('thank_you')}</TitleThankYou>
                    <TitleText>
                        {t('for_supporting_us_and_passing_quiz')}
                    </TitleText>
                </Title>
                <img src={checkMark} width={118} />
                <ButtonsWrapper>
                    <DownloadButton onClick={downloadCsv}>
                        <PiDownloadSimple />
                        {t('download_my_answers')}
                    </DownloadButton>
                    <Button onClick={handleButtonClick}>
                        {t('retake_quiz')}
                    </Button>
                </ButtonsWrapper>
            </GratitudeContainer>
        </Main>
    )
}

export default GratitudePage
