import React, {
    createContext,
    useState,
    ReactNode,
    Dispatch,
    SetStateAction,
} from 'react'

export type QuizContextProps = {
    loading: boolean
    setLoading: Dispatch<SetStateAction<boolean>>
}

export const QuizContext = createContext<QuizContextProps | undefined>(
    undefined,
)

export const QuizProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [loading, setLoading] = useState<boolean>(false)

    return (
        <QuizContext.Provider value={{ loading, setLoading }}>
            {children}
        </QuizContext.Provider>
    )
}
