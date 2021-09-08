//Core
import React, { FC } from 'react';

// Components
import { Contacts, LinkButton } from '../../components';

//Elements
import { PageContainer, PageTitle } from '../../elements';

//Helpers
import { book } from '../../App/Routes/book';

type PropTypes = {};

const HomeTask41: FC<PropTypes> = () => {
    return (
        <PageContainer>
            <PageTitle>Home task 4.1</PageTitle>
            <LinkButton
                text = 'Back to Tasks'
                to = { book.courseTasks }
            />
            <Contacts />
        </PageContainer>
    );
};

export default HomeTask41;
