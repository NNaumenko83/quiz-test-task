import React from 'react'

type ErrorMessageProps = {
    children: React.ReactNode
}

const ErrorMessage = ({ children }: ErrorMessageProps) => {
    return <p>{children}</p>
}

export default ErrorMessage
