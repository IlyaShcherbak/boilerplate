//Core
import React, { FC } from 'react';

// Elements
import { Tag, CommentsCounter, LikesCounter } from '../../elements';

// Styles
import { ArticleContainer, Header, Poster, Image, Tags, ArticleText, Footer, Controls, UserBlock } from './styles';

export type ArticleType = {
    title: string,
    description: string,
    published: string,
    likes: number,
    comments: number,
    image: string,
    tags: Array<string>,
}

export type User = {
    'first_name': string,
    'last_name': string,
    'avatar': string,
}

type PropTypes = {
    title: string,
    description: string,
    published: string,
    likes: number,
    comments: number,
    image: string,
    tags: Array<string>,
    user?: User,
};

export const Article: FC<PropTypes> = ({ title, description, published, likes, comments, image, tags, user }) => {
    return (
        <ArticleContainer>
            <Header>
                {user && (
                    <UserBlock>
                        <img
                            className = 'avatar'
                            src = { user.avatar }
                        />
                        { `${user.first_name} ${user.last_name}` }
                    </UserBlock>
                )}
                <Poster>
                    <Image
                        alt = ''
                        src = { image }
                    />
                </Poster>
                <Tags>
                    {tags.map((tagData, index) => (
                        <div key = { `tag${index}` }>
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
