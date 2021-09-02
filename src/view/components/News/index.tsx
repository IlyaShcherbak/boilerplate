//Core
import React, { FC } from 'react';

//Components
import { Article } from '../Article';
import { Accordion } from '../Accordion';

// Styles
import { StyledNews } from './styles';

//Data
import data from './source.json';

type PropTypes = {};

export const News: FC<PropTypes> = () => {
    const accordionData = [
        {
            question: 'What business are you doing?',

            answer: 'In the past few years India has made attempts to get back several historic items. Some historians claim that the Kohinoor was taken away from India by force.',
        },
        {
            question: 'What is your name?',

            answer: 'My name is Andrii.',
        },
        {
            question: 'Do you prefer cats or dogs?',

            answer: 'I like cats.',
        },
    ];

    return (
        <>
            <StyledNews>
                {data.map((articleData) => (
                    <Article
                        comments = { articleData.comments }
                        description = { articleData.description }
                        image = { articleData.image }
                        likes = { articleData.likes }
                        published = { articleData.published }
                        tags = { articleData.tags }
                        title = { articleData.title }
                    />
                ))}
            </StyledNews>
            <Accordion data = { accordionData }/>
        </>
    );
};
