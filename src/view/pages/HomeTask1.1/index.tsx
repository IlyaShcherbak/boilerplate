//Core
import React, { FC } from 'react';

// Components
import { ArticleType, LinkButton, News } from '../../components';

//Elements
import { PageContainer, PageTitle } from '../../elements';

//Helpers
import { book } from '../../App/Routes/book';

type PropTypes = {};

const HomeTask11: FC<PropTypes> = () => {
    const dataNews: Array<ArticleType> = [
        {
            title:       'American writer of',
            description: 'Lorem ipsum',
            published:   '2019-10-15T15:32:45.167Z',
            likes:       315,
            comments:    10,
            image:       'https://miro.medium.com/max/1280/1*N6eYi8bOQ9tyZy8NGWDNKA.png',
            tags:        [
                'literature',
                'books',
            ],
        },
        {
            title:       'American writer of',
            description: 'Lorem ipsum',
            published:   '2019-10-15T15:32:45.167Z',
            likes:       315,
            comments:    10,
            image:       'https://miro.medium.com/max/1280/1*N6eYi8bOQ9tyZy8NGWDNKA.png',
            tags:        [
                'literature',
                'books',
            ],
        },
        {
            title:       'American writer of',
            description: 'Lorem ipsum',
            published:   '2019-10-15T15:32:45.167Z',
            likes:       315,
            comments:    10,
            image:       'https://miro.medium.com/max/1280/1*N6eYi8bOQ9tyZy8NGWDNKA.png',
            tags:        [
                'literature',
                'books',
            ],
        },
    ];

    return (
        <PageContainer>
            <PageTitle>Home task 1.1</PageTitle>
            <LinkButton
                text = 'Back to Tasks'
                to = { book.courseTasks }
            />
            <News data = { dataNews }/>
        </PageContainer>
    );
};

export default HomeTask11;
