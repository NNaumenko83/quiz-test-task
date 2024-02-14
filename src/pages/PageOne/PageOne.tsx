import React, { useEffect, useRef } from 'react'
import Title from '../../components/Title/Title'
import LanguagesList from '../../components/LanguagesList/LanguagesList'
import { useTranslation } from 'react-i18next'
import Snap from 'snapsvg-cjs'

const PageOne = () => {
    const { t } = useTranslation()
    const countRef = useRef(null)

    useEffect(() => {
        // Анімація зміни значення тексту
        const count = countRef.current
        const countValue = parseInt(count.textContent, 10)

        let startTime
        function updateText(timestamp) {
            if (!startTime) startTime = timestamp
            const progress = timestamp - startTime
            const progressValue = Math.min(progress / 5000, 1)
            const animatedValue = Math.ceil(progressValue * countValue)
            count.textContent = animatedValue + '%'

            if (progress < 5000) {
                requestAnimationFrame(updateText)
            }
        }
        requestAnimationFrame(updateText)

        // Анімація прокресу шляху
        const s = Snap('#animated')
        const progress = s.select('#progress')

        progress.attr({ strokeDasharray: '0, 251.2' })
        Snap.animate(
            0,
            251.2,
            function (value) {
                progress.attr({ 'stroke-dasharray': value + ',251.2' })
            },
            5000,
        )
    }, [])

    return (
        <div>
            <h2>{t('what_is_your_age')}</h2>
            Home
            <Title>What is your preffered language</Title>
            <LanguagesList />
            <svg id="animated" viewBox="0 0 600 600">
                <circle cx="50" cy="50" r="45" fill="#FDB900" />
                <path
                    id="progress"
                    strokeLinecap="round"
                    strokeWidth="15"
                    stroke="#081feb"
                    fill="none"
                    d="M50 10
           a 40 40 0 0 1 0 80
           a 40 40 0 0 1 0 -80"
                ></path>
                <text
                    ref={countRef}
                    id="count"
                    x="50"
                    y="50"
                    textAnchor="middle"
                    dy="7"
                    fontSize="20"
                >
                    100%
                </text>
            </svg>
        </div>
    )
}

export default PageOne
