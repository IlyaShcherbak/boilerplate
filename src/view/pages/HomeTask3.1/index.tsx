//Core
import React, { FC } from 'react';

// Components
import { LinkButton, News } from '../../components';

//Elements
import { PageContainer, PageTitle, Spinner } from '../../elements';

//Helpers
import { book } from '../../App/Routes/book';

//Data
import dataNews from '../HomeTask2.1/source.json';

//Hooks
import { useApiLoader } from '../../../tools/hooks/useApiLoader';

//API
import { api } from '../../../bus/hometask/api';

type PropTypes = {};

const HomeTask31: FC<PropTypes> = () => {
    const {
        isFetching,
        fetchedData: users, // alias
    } = useApiLoader(api.users.fetch);


    return (
        <PageContainer>
            <PageTitle>Home task 3.1</PageTitle>
            <LinkButton
                text = 'Back to Tasks'
                to = { book.courseTasks }
            />
            { !isFetching ? (
                <News
                    data = { dataNews }
                    users = { users }
                />
            ) : <Spinner size = '10x' />
            }
        </PageContainer>
    );
};

export default HomeTask31;
