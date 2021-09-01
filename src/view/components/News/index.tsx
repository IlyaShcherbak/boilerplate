//Core
import React, { FC } from 'react';

//Components
import { Article } from '../Article';

// Styles
import { StyledNews } from './styles';

type PropTypes = {};

export const News: FC<PropTypes> = () => {
    return (
        <StyledNews>
            <Article/>
            <Article/>
            <Article/>
        </StyledNews>
    );
};
