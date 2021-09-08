//Core
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

//Styles
import { StyledButton } from './styles';

type PropTypes = {
    to: string,
    text: string,
};

export const LinkButton: FC<PropTypes> = ({ to, text }) => {
    return (
        <Link to = { to } >
            <StyledButton>{text}</StyledButton>
        </Link>
    );
};
