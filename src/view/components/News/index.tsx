//Core
import React, { FC, useState, useEffect } from 'react';

// Hooks
import { api } from '../../../bus/hometask/api';

//Components
import { Article } from '../Article';
import { Accordion } from '../Accordion';
import { StudentRegistration } from '../StudentRegistration';

// Elements
import { Spinner } from '../../elements';

// Styles
import { StyledNews, ServerError } from './styles';

//Data
import dataNews from './source.json';

export const useApiLoader = () => {
    const [ fetchedData, setFetchedData ] = useState([]);
    const [ isFetching, setIsFetching ] = useState(false);
    const [ isServerError, setIsServerError ] = useState(false);

    useEffect(() => {
        (async () => {
            setIsFetching(true);
            const responceJson = await api.users.fetch();

            if (responceJson.status !== 200) {
                setIsServerError(true);
            } else {
                const responce = await responceJson.json();
                setFetchedData(responce.data);
            }
            setIsFetching(false);
        })();
    }, []);

    return {
        isFetching,
        fetchedData,
        isServerError,
    };
};

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

    const {
        isFetching,
        fetchedData,
        isServerError,
    } = useApiLoader();

    return (
        <>
            {isServerError && <ServerError>Server error</ServerError>}
            <StyledNews>
                {
                    !isFetching ? dataNews.map((articleData, index) => (
                        <Article
                            comments = { articleData.comments }
                            description = { articleData.description }
                            image = { articleData.image }
                            key = { `article-${index}` }
                            likes = { articleData.likes }
                            published = { articleData.published }
                            tags = { articleData.tags }
                            title = { articleData.title }
                            user = { fetchedData[ index ] }
                        />
                    )) : <Spinner size = '5x' />
                }

            </StyledNews>
            <Accordion data = { accordionData }/>
            <StudentRegistration/>
        </>
    );
};
