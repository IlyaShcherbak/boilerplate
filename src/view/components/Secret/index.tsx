//Core
import React, { FC } from 'react';

type PropTypes = {
    value: string
};

export const Secret: FC<PropTypes> = ({ value = 'default' }) => {
    return (
        <p>My secret: { value }</p>
    );
};
