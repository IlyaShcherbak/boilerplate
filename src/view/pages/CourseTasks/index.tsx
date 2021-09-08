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
            description: 'aaaaaaa',
            index:       1.1,
        },
        {
            description: 'bbbbbbb',
            index:       2.1,
        },
        {
            description: 'ccccccc',
            index:       2.3,
        },
        {
            description: 'ddddddd',
            index:       3.1,
        },
        {
            description: 'eeeeeee',
            index:       3.2,
        },
        {
            description: 'fffffff',
            index:       4.1,
        },
        {
            description: 'ggggggg',
            index:       4.2,
        },
        {
            description: 'hhhhhhh',
            index:       5.1,
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
            {/* <Link to = '/'>
                <StyledButton>Main Page</StyledButton>
            </Link>
            <Link to = '/contacts'>
                <StyledButton>Contacts</StyledButton>
            </Link> */}
            {/* <News/> */}
        </PageContainer>
    );
};

export default () => (
    <ErrorBoundary>
        <CourseTasks />
    </ErrorBoundary>
);
