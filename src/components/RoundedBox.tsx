import React, { Children } from 'react';
import styled, { css } from 'styled-components';

type BoxProps = {
    round?: boolean;
    children?: React.ReactNode;
    style?: React.CSSProperties;
}

const StyledDiv = styled.div<{round?: boolean}>`
    display:flex;
    flex-direction:column;
    border: 0.2rem solid black;
    min-width: 40rem;

    padding-top: 3.3rem;
    padding-bottom: 3rem;
    justify-content: center; /* 내용 가운데 정렬 */
    align-items: center; /* 내용 가운데 정렬 */

    ${({round}) => round && css`
        border-radius: 5rem;
    `}
`

const Box = ({ round, children, style }: BoxProps)=>{
    return (
        <StyledDiv
            round={round} style={style}
        > {children} </StyledDiv>
    )
}

export default Box;