import React from 'react'
import { StyledText } from './Text.styled'

type TextProps = {
    children: React.ReactNode
}

const Text = ({ children }: TextProps) => {
    return <StyledText>{children}</StyledText>
}

export default Text
