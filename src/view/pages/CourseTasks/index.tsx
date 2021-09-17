//Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary, LinkButton } from '../../components';

// Styles
import { PageContainer, StyledTaskDescription } from './styles';

//Helpers
import { book } from '../../App/Routes/book';

type TaskPropTypes = {
    index: number,
    description: string,
};

const Task: FC<TaskPropTypes> = ({ index, description }) => {
    return (
        <div>
            <LinkButton
                text = { `Home Task ${index}` }
                to = { `${book.courseTasks}/${index}` }
            />

            <StyledTaskDescription>{ description }</StyledTaskDescription>
        </div>
    );
};

type PropTypes = {};

const CourseTasks: FC<PropTypes> = () => {
    const taskData = [
        {
            description: 'Made React app from html-file with hardcoded data.',
            index:       11,
        },
        {
            description: 'Take data from .json file and display it.',
            index:       21,
        },
        {
            description: 'Add likes counter',
            index:       22,
        },
        {
            description: 'Make accordion component',
            index:       23,
        },
        {
            description: 'Fetch data fom API and add a loader that will be displayed when loading news from the API.',
            index:       31,
        },
        {
            description: 'Imitate server error and handle it.',
            index:       32,
        },
        {
            description: 'Add route to new page Contacts.',
            index:       41,
        },
        {
            description: 'Add page Secret with dinamic parameter.',
            index:       42,
        },
        {
            description: 'Make form with formik library',
            index:       51,
        },
        {
            description: 'Add validation to form',
            index:       52,
        },
        {
            description: 'Add Redux',
            index:       61,
        },
        {
            description: 'Fetching People',
            index:       71,
        },
        {
            description: 'Fetching Films',
            index:       72,
        },
    ];

    return (
        <PageContainer>
            <LinkButton
                text = 'User Info'
                to = { book.userInfo }
            />

            {taskData.map(({ description, index }) => (
                <Task
                    description = { description }
                    index = { index }
                    key = { `task-${ index }` }
                />
            ))}
        </PageContainer>
    );
};

export default () => (
    <ErrorBoundary>
        <CourseTasks />
    </ErrorBoundary>
);
