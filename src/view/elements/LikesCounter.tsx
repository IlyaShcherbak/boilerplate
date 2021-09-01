// Core
import React, { FC } from 'react';
import styled from 'styled-components';

// Styles
const StyledLikesCounter = styled.span`
    font-family: Helvetica;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);

    &::before {
        content: '♥';
        display: inline;
        font-size: 11px;
        opacity: 0.6;
    }
`;

type LikesCounterProps = {};
export const LikesCounter: FC<LikesCounterProps> = () => {
    return (
        <StyledLikesCounter> 315 </StyledLikesCounter>
    );
};
