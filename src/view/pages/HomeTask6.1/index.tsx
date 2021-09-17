//Core
import React, { FC } from 'react';

// Components
import { LinkButton } from '../../components';

//Elements
import { PageContainer, PageTitle } from '../../elements';

//Helpers
import { book } from '../../App/Routes/book';

//Components
import { ReduxApp } from '../../../bus/student';


type PropTypes = {};

const HomeTask61: FC<PropTypes> = () => {
    return (
        <PageContainer>
            <PageTitle>Home task 6.1</PageTitle>
            <LinkButton
                text = 'Back to Tasks'
                to = { book.courseTasks }
            />
            <ReduxApp />
        </PageContainer>
    );
};

export default HomeTask61;
