import { useEffect, useRef } from 'react'
import Snap from 'snapsvg-cjs'

const Loader = () => {
    const countRef = useRef<SVGTextElement>(null)

    useEffect(() => {
        const count = countRef.current
        let countValue: number | undefined
        if (count && count.textContent !== null) {
            countValue = parseInt(count.textContent, 10)
        }

        let startTime: number
        function updateText(timestamp: number) {
            if (!startTime) startTime = timestamp
            const progress = timestamp - startTime
            const progressValue = Math.min(progress / 5000, 1)
            const animatedValue = Math.ceil(progressValue * (countValue || 0))
            if (count) {
                count.textContent = animatedValue + '%'
            }

            if (progress < 5000) {
                requestAnimationFrame(updateText)
            }
        }
        requestAnimationFrame(updateText)

        const s = Snap('#animated')
        const progress = s.select('#progress')

        progress.attr({ strokeDasharray: '0, 251.2' })
        Snap.animate(
            0,
            251.2,
            function (value: string) {
                progress.attr({ 'stroke-dasharray': value + ',251.2' })
            },
            5000,
        )
    }, [])
    return (
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
    )
}

export default Loader
