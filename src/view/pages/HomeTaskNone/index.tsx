//Core
import React, { FC } from 'react';

// Components
import { LinkButton } from '../../components';

//Elements
import { PageContainer, PageTitle } from '../../elements';

//Helpers
import { book } from '../../App/Routes/book';

type PropTypes = {};

const HomeTaskNone: FC<PropTypes> = () => {
    return (
        <PageContainer>
            <PageTitle>Home task not available yet</PageTitle>
            <LinkButton
                text = 'Back to Tasks'
                to = { book.courseTasks }
            />
        </PageContainer>
    );
};

export default HomeTaskNone;
