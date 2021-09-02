//Core
import React, { FC } from 'react';

// Elements
import { Tag, CommentsCounter, LikesCounter } from '../../elements';

// Styles
import { ArticleContainer, Header, Poster, Image, Tags, ArticleText, Footer, Controls } from './styles';

type PropTypes = {
    title: string,
    description: string,
    published: string,
    likes: number,
    comments: number,
    image: string,
    tags: Array<string>,
};

export const Article: FC<PropTypes> = ({ title, description, published, likes, comments, image, tags }) => {
    return (
        <ArticleContainer>
            <Header>
                <Poster>
                    <Image
                        alt = ''
                        src = { image }
                    />
                </Poster>
                <Tags>
                    {tags.map((tagData) => (
                        <div>
                            <Tag source = { tagData }/>
                        </div>
                    ))}
                </Tags>
            </Header>
            <ArticleText>
                <h1>{ title }</h1>
                <p>{ description }</p>
            </ArticleText>
            <Footer>
                <span>{ new Date(published).toDateString() }</span>
                <Controls>
                    <CommentsCounter counts = { comments }/>
                    <LikesCounter counts = { likes }/>
                </Controls>
            </Footer>
        </ArticleContainer>
    );
};
