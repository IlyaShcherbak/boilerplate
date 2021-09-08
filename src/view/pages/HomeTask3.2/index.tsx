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

//Styles
import { ServerError } from './styles';

//API
import { api } from '../../../bus/hometask/api';

type PropTypes = {};

const HomeTask32: FC<PropTypes> = () => {
    const {
        isFetching,
        isServerError,
        fetchedData: users, // alias
    } = useApiLoader(api.users.fetchWithError);

    return (
        <PageContainer>
            <PageTitle>Home task 3.2</PageTitle>
            <LinkButton
                text = 'Back to Tasks'
                to = { book.courseTasks }
            />
            {isServerError && <ServerError>Server error</ServerError>}
            { !isFetching ? !isServerError && (
                <News
                    data = { dataNews }
                    users = { users }
                />
            ) : <Spinner size = '10x' />
            }
        </PageContainer>
    );
};

export default HomeTask32;
