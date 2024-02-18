import React from 'react'
import StyledSmallTitle from './SmallTitle.syled'

type SmallTitleProps = {
    children: React.ReactNode
}

const SmallTitle = ({ children }: SmallTitleProps) => {
    return <StyledSmallTitle>{children}</StyledSmallTitle>
}

export default SmallTitle
