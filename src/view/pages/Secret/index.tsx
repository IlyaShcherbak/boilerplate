//Core
import React, { FC } from 'react';

// Components
import { Secret as SecretComponent } from '../../components';

type PropTypes = {
    value: string
};

const Secret: FC<PropTypes> = (props: PropTypes) => {
    return (
        <SecretComponent value = { props.value }/>
    );
};

export default Secret;
