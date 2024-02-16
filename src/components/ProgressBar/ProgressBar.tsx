import React from 'react'
import { PartOfBar, StyledProgressBar } from './ProgressBar.styled'

type IProgressBarProps = {
    page: number
}

const ProgressBar = ({ page }: IProgressBarProps) => {
    return (
        <StyledProgressBar>
            {Array.from({ length: 6 }).map((_, index) => (
                <PartOfBar key={index} active={index + 1 <= page}></PartOfBar>
            ))}
        </StyledProgressBar>
    )
}

export default ProgressBar
