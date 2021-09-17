//Core
import React, { FC } from 'react';
import { useRouteMatch } from 'react-router';
import { useHistory } from 'react-router-dom';

// Components
import { LinkButton, People } from '../../components';
import { PersonInfo } from '../../components/PersonInfo';

//Elements
import { PageContainer, PageTitle, Spinner } from '../../elements';

//Helpers
import { book } from '../../App/Routes/book';

//Hooks
import { usePeopleLoader } from '../../../tools/hooks/usePeopleLoader';

//Styles
import { PeopleListSection } from './styles';


type PropTypes = {};

const HomeTask71: FC<PropTypes> = () => {
    const { isFetching, data, error } = usePeopleLoader();
    const match = useRouteMatch<{id: string}>(`${book.courseTasks}/71${book.person}`);

    const history = useHistory();
    const selectPerson = (id:number) => {
        history.push(`${book.courseTasks}/71/people/${id}`);
    };

    return (
        <PageContainer>
            <PageTitle>Home task 7.1</PageTitle>
            <LinkButton
                text = 'Back to Tasks'
                to = { book.courseTasks }
            />
            { !isFetching ? !error && (
                <PeopleListSection>
                    <People
                        peopleList = { data }
                        selectPerson = { selectPerson }
                    />
                    { match && match.params && <PersonInfo { ...data[ Number(match.params.id) ] } />}
                </PeopleListSection>
            ) : <Spinner size = '10x' />
            }
        </PageContainer>
    );
};

export default HomeTask71;
