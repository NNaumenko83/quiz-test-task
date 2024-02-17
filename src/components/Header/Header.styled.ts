import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const TitlePage = styled.h3`
    font-family: 'AlbertSans-ExtraBold';
    font-size: 18px;
    font-weight: 800;
    line-height: 1.11;
    letter-spacing: 0%;
`

export const ActivePageText = styled.span`
    color: #e4229c;
`
export const TotalPageText = styled.span`
    color: #e8eaf2;
`
export const ArrowLinkPageWrapper = styled.div`
    width: 100%;

    position: relative;

    display: flex;
    align-items: baseline;
    justify-content: center;

    margin-bottom: 12px;
`

export const StyledLink = styled(Link)`
    color: #ffffff;
    position: absolute;

    left: 0;
    top: 10%;
    transition: color 250ms linear;
    &:hover {
        color: #e4229c;
    }
`

export const StyledHeader = styled.header`
    padding-top: 1rem;
    padding-bottom: 16px;
    margin-bottom: 1.5rem;
`
