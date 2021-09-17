//Core
import React, { FC } from 'react';

// Components
import { LinkButton, StudentRegistration } from '../../components';


//Elements
import { PageContainer, PageTitle } from '../../elements';

//Helpers
import { book } from '../../App/Routes/book';


type PropTypes = {};

const HomeTask51: FC<PropTypes> = () => {
    return (
        <PageContainer>
            <PageTitle>Home task 5.1</PageTitle>
            <LinkButton
                text = 'Back to Tasks'
                to = { book.courseTasks }
            />
            <StudentRegistration />
        </PageContainer>
    );
};

export default HomeTask51;
