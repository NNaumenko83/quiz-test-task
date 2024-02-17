import React from 'react'
import { StyledColorText } from './ColorText.styled'

type ColorTextProps = {
    children: React.ReactNode
}

const ColorText = ({ children }: ColorTextProps) => {
    return <StyledColorText>{children}</StyledColorText>
}

export default ColorText
