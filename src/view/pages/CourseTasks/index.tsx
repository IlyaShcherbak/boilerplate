//Core
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

// Components
import { ErrorBoundary, News } from '../../components';

// Styles
import { PageContainer } from './styles';

// Elements
import { Button } from '../../elements';

type PropTypes = {};

const CourseTasks: FC<PropTypes> = () => {
    return (
        <PageContainer>
            <Link to = '/'>
                <Button>Main Page</Button>
            </Link>
            <Link to = '/contacts'>
                <Button>Contacts</Button>
            </Link>
            <News/>
        </PageContainer>
    );
};

export default () => (
    <ErrorBoundary>
        <CourseTasks />
    </ErrorBoundary>
);
