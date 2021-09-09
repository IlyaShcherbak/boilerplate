//Core
import React, { FC } from 'react';

// Components
import { LinkButton, News } from '../../components';

//Elements
import { PageContainer, PageTitle } from '../../elements';

//Helpers
import { book } from '../../App/Routes/book';

//Data
import dataNews from '../HomeTask2.1/source.json';

type PropTypes = {};

const HomeTask22: FC<PropTypes> = () => {
    return (
        <PageContainer>
            <PageTitle>Home task 2.2</PageTitle>
            <LinkButton
                text = 'Back to Tasks'
                to = { book.courseTasks }
            />
            <News data = { dataNews }/>
        </PageContainer>
    );
};

export default HomeTask22;
