//Core
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

// Components
import { ErrorBoundary, News } from '../../components';

// Elements
import { Button } from '../../elements';

type PropTypes = {};

const CourseTasks: FC<PropTypes> = () => {
    return (
        <>
            <Link to = '/'>
                <Button>Main Page</Button>
            </Link>
            <News/>
        </>
    );
};

export default () => (
    <ErrorBoundary>
        <CourseTasks />
    </ErrorBoundary>
);
