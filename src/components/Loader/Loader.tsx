import { useEffect, useRef } from 'react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Snap from 'snapsvg-cjs'
import { LooaderText } from './Loader.styled'

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
        <svg id="animated" viewBox="0 0 100 100" width={200}>
            <circle
                cx="50"
                cy="50"
                r="37"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="5"
            />
            <path
                id="progress"
                strokeWidth="5"
                stroke="#E4229C"
                fill="none"
                d="M50 10
           a 40 40 0 0 1 0 80
           a 40 40 0 0 1 0 -80"
            ></path>
            <LooaderText
                ref={countRef}
                id="count"
                x="50"
                y="50"
                textAnchor="middle"
                dy="7"
            >
                100%
            </LooaderText>
        </svg>
    )
}

export default Loader
