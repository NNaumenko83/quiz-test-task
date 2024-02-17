import styled from 'styled-components'

type PartOfBarProps = {
    active: boolean
}

export const StyledProgressBar = styled.div`
    width: 100%;
    display: flex;
    :nth-child(1) {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
    :nth-last-child(1) {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
`

export const PartOfBar = styled.div<PartOfBarProps>`
    height: 10px;
    flex-basis: calc(100% / 5);

    background-color: ${props => (props.active ? '#E4229C' : '#E8EAF2')};
`
