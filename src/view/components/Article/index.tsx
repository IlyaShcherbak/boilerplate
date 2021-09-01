//Core
import React, { FC } from 'react';

// Elements
import { Tag, CommentsCounter, LikesCounter } from '../../elements';

// Styles
import { ArticleContainer, Header, Poster, Image, Tags, ArticleText, Footer, Controls } from './styles';

type PropTypes = {};

export const Article: FC<PropTypes> = () => {
    const tagText1 = 'Literature';
    const tagText2 = 'Books';

    return (
        <ArticleContainer>
            <Header>
                <Poster>
                    <Image
                        alt = ''
                        src = 'https://miro.medium.com/max/1280/1*N6eYi8bOQ9tyZy8NGWDNKA.png'
                    />
                </Poster>
                <Tags>
                    <div>
                        <Tag text = { tagText1 }/>
                    </div>
                    <div>
                        <Tag text = { tagText2 }/>
                    </div>
                </Tags>
            </Header>
            <ArticleText>
                <h1>American writer of bad cowboy stories arrived in</h1>
                <p>Volunteering to help people in need combined with travelling to faraway places is a new </p>
            </ArticleText>
            <Footer>
                <span>15.07.2017</span>
                <Controls>
                    <CommentsCounter/>
                    <LikesCounter/>
                </Controls>
            </Footer>
        </ArticleContainer>
    );
};
