import React from 'react'
import StyledTitle from './Title.styled'

type TitleProps = {
    children: React.ReactNode
}

const Title = ({ children }: TitleProps) => {
    return <StyledTitle>{children}</StyledTitle>
}

export default Title
