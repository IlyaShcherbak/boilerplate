// Core
import React, { FC } from 'react';
import styled from 'styled-components';

// Styles
const StyledTag = styled.span`
    background-color: orange;
    color: white;
    border: none;
    border-radius: 3px;
    padding: 6px 15px;
    font-family: Helvetica;
    font-size: 14px;
    font-weight: 400;
`;

type TagProps = {
    text: string
};
export const Tag: FC<TagProps> = ({ text }) => {
    return (
        <StyledTag> {text} </StyledTag>
    );
};
