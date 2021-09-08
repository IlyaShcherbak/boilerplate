//Core
import React, { FC } from 'react';

// Components
import { Accordion, LinkButton } from '../../components';

//Elements
import { PageContainer, PageTitle } from '../../elements';

//Helpers
import { book } from '../../App/Routes/book';

type PropTypes = {};

const HomeTask23: FC<PropTypes> = () => {
    const accordionData = [
        {
            question: 'What business are you doing?',
            answer:   'In the past few years India has made attempts to get back several historic items. Some historians claim that the Kohinoor was taken away from India by force.',
        },
        {
            question: 'What is your name?',
            answer:   'My name is Andrii.',
        },
        {
            question: 'Do you prefer cats or dogs?',
            answer:   'I like cats.',
        },
    ];

    return (
        <PageContainer>
            <PageTitle>Home task 2.3</PageTitle>
            <LinkButton
                text = 'Back to Tasks'
                to = { book.courseTasks }
            />
            <Accordion data = { accordionData } />
        </PageContainer>
    );
};

export default HomeTask23;
