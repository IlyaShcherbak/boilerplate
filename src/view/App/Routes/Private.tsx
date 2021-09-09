// Core
import React, { FC, useEffect } from 'react';
import { Switch, Route, Redirect, useHistory, useLocation } from 'react-router-dom';

// Pages
import { UserInfo, CourseTasks, HomeTaskNone, HomeTask11, HomeTask21, HomeTask22, HomeTask23, HomeTask31, HomeTask32, HomeTask41, HomeTask42, Secret, HomeTask51, HomeTask52 } from '../../pages';


//Helpers
import { book } from './book';

export const Private: FC = () => {
    const { push } = useHistory();
    const { pathname } = useLocation();

    useEffect(()=> {
        if (pathname.match(/login|register/)) {
            push('/');
        }
    });

    return (
        <Switch>
            {/* <Route
                exact
                path = '/'>
                <Main />
            </Route> */}
            <Route
                exact
                path = { book.userInfo }>
                <UserInfo />
            </Route>
            <Route
                exact
                path = { book.courseTasks }>
                <CourseTasks />
            </Route>
            <Route
                exact
                path = { book.courseTasksCertain }
                render = { ({ match }) => {
                    switch (match.params.index) {
                        case '11':
                            return <HomeTask11 />;
                        case '21':
                            return <HomeTask21 />;
                        case '22':
                            return <HomeTask22 />;
                        case '23':
                            return <HomeTask23 />;
                        case '31':
                            return <HomeTask31 />;
                        case '32':
                            return <HomeTask32 />;
                        case '41':
                            return <HomeTask41 />;
                        case '42':
                            return <HomeTask42 />;
                        case '51':
                            return <HomeTask51 />;
                        case '52':
                            return <HomeTask52 />;

                        default:
                            return <HomeTaskNone />;
                    }
                } }
            />
            {/* <Route
                exact
                path = { book.contacts }>
                <Contacts />
            </Route> */}
            <Route
                exact
                path = { book.secret }
                render = { ({ match }) => <Secret value = { match.params.value }/> }
            />
            <Redirect to = { book.courseTasks } />
        </Switch>
    );
};
