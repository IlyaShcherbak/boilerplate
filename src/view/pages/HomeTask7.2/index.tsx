//Core
import React, { FC } from 'react';
import { useRouteMatch } from 'react-router';
import { useHistory } from 'react-router-dom';

// Components
import { LinkButton } from '../../components';
import { FilmsList } from '../../components/Films';
import { FilmInfo } from '../../components/FilmInfo';

//Elements
import { PageContainer, PageTitle, Spinner } from '../../elements';

//Helpers
import { book } from '../../App/Routes/book';

//Hooks
import { useFilmsleLoader } from '../../../tools/hooks/useFilmsLoader';

//Styles
import { FilmsListSection } from './styles';


type PropTypes = {};

const HomeTask72: FC<PropTypes> = () => {
    const { isFetching, data, error } = useFilmsleLoader();

    const match = useRouteMatch<{id: string}>(`${book.courseTasks}/72${book.film}`);

    const history = useHistory();
    const selectFilm = (id:number) => {
        history.push(`${book.courseTasks}/72/films/${id}`);
    };

    return (
        <PageContainer>
            <PageTitle>Home task 7.2</PageTitle>
            <LinkButton
                text = 'Back to Tasks'
                to = { book.courseTasks }
            />
            { !isFetching ? !error && (
                <FilmsListSection>
                    <FilmsList
                        dataList = { data }
                        selectItem = { selectFilm }
                    />
                    { match && match.params && <FilmInfo { ...data[ Number(match.params.id) ] } />}
                </FilmsListSection>
            ) : <Spinner size = '10x' />
            }
        </PageContainer>
    );
};

export default HomeTask72;
