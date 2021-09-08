//Core
import React, { FC } from 'react';

//Book
import { book } from '../../App/Routes/book';

// Components
import { LinkButton, Secret as SecretComponent } from '../../components';

//Elements
import { PageContainer } from '../../elements';

type PropTypes = {
    value: string
};

const Secret: FC<PropTypes> = (props: PropTypes) => {
    return (
        <PageContainer>
            <LinkButton
                text = 'Back to Tasks'
                to = { book.courseTasks }
            />
            <SecretComponent value = { props.value }/>
        </PageContainer>
    );
};

export default Secret;
