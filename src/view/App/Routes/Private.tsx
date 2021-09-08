// Core
import React, { FC, useEffect } from 'react';
import { Switch, Route, Redirect, useHistory, useLocation } from 'react-router-dom';

// Pages
import { UserInfo, CourseTasks, HomeTaskNone, HomeTask11, HomeTask21, HomeTask23, HomeTask31, HomeTask32, HomeTask42, Secret, HomeTask51 } from '../../pages';
import HomeTask41 from '../../pages/HomeTask4.1';


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
                        case '1.1':
                            return <HomeTask11 />;
                        case '2.1':
                            return <HomeTask21 />;
                        case '2.3':
                            return <HomeTask23 />;
                        case '3.1':
                            return <HomeTask31 />;
                        case '3.2':
                            return <HomeTask32 />;
                        case '4.1':
                            return <HomeTask41 />;
                        case '4.2':
                            return <HomeTask42 />;
                        case '5.1':
                            return <HomeTask51 />;

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
