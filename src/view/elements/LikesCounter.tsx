// Core
import React, { FC, useState } from 'react';
import styled from 'styled-components';

// Styles
const StyledLikesCounter = styled.span`
    font-family: Helvetica;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer;

    &::before {
        content: '♥';
        display: inline;
        font-size: 11px;
        opacity: 0.6;
    }
`;

export type LikesCounterProps = {
    counts?: number
};
export const LikesCounter: FC<LikesCounterProps> = ({ counts = 0 }) => {
    const [ likes, setLikes ] = useState<number>(counts);

    function likesIncrement() {
        if (likes === counts) {
            setLikes(likes + 1);
        } else {
            setLikes(likes - 1);
        }
    }

    return (
        <StyledLikesCounter onClick = { likesIncrement }>
            { likes }
        </StyledLikesCounter>
    );
};
