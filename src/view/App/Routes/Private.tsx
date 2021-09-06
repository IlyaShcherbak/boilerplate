// Core
import React, { FC, useEffect } from 'react';
import { Switch, Route, Redirect, useHistory, useLocation } from 'react-router-dom';

// Pages
import { Main, UserInfo, CourseTasks, Contacts, Secret } from '../../pages';

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
            <Route
                exact
                path = '/UserInfo'>
                <UserInfo />
            </Route>
            <Route
                exact
                path = '/CourseTasks'>
                <CourseTasks />
            </Route>
            <Route
                exact
                path = '/'>
                <Main />
            </Route>
            <Route
                exact
                path = { book.contacts }>
                <Contacts />
            </Route>
            <Route
                exact
                path = { book.secret }
                render = { ({ match }) => <Secret value = { match.params.value }/> }
            />
            <Redirect to = '/form' />
        </Switch>
    );
};
