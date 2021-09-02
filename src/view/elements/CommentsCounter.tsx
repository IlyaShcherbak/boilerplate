// Core
import React, { FC } from 'react';
import styled from 'styled-components';

// Styles
const StyledCommentsCounter = styled.span`
    font-family: Helvetica;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);

    &::before {
        content: '👋';
        display: inline;
        font-size: 11px;
        opacity: 0.6;
    }
`;

type CommentsCounterProps = {
    counts: number
};
export const CommentsCounter: FC<CommentsCounterProps> = ({ counts }) => {
    return (
        <StyledCommentsCounter> { counts } </StyledCommentsCounter>
    );
};
