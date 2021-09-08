//Core
import React, { FC } from 'react';

//Components
import { Article, ArticleType, User } from '../Article';

// Styles
import { StyledNews } from './styles';

type PropTypes = {
    data: Array<ArticleType>,
    users?: Array<User>,
};

export const News: FC<PropTypes> = ({ data, users }) => {
    return (
        <>
            <StyledNews>
                {
                    data.map((articleData, index) => (
                        <Article
                            comments = { articleData.comments }
                            description = { articleData.description }
                            image = { articleData.image }
                            key = { `article-${index}` }
                            likes = { articleData.likes }
                            published = { articleData.published }
                            tags = { articleData.tags }
                            title = { articleData.title }
                            user = { users && users[ index ] }
                        />
                    ))
                }
            </StyledNews>
        </>
    );
};
