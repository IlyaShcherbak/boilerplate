//Core
import React, { FC } from 'react';

// Components
import { LinkButton } from '../../components';

//Elements
import { PageContainer, PageTitle } from '../../elements';

//Helpers
import { book } from '../../App/Routes/book';

type PropTypes = {};

const HomeTask42: FC<PropTypes> = () => {
    return (
        <PageContainer>
            <PageTitle>Home task 4.2</PageTitle>
            <LinkButton
                text = 'Back to Tasks'
                to = { book.courseTasks }
            />
            <LinkButton
                text = 'Get secret'
                to = { book.secret }
            />
        </PageContainer>
    );
};

export default HomeTask42;
