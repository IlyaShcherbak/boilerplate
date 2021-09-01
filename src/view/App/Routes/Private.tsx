// Core
import React, { FC, useEffect } from 'react';
import { Switch, Route, Redirect, useHistory, useLocation } from 'react-router-dom';

// Pages
import { Main, UserInfo, CourseTasks } from '../../pages';

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
            <Redirect to = '/form' />
        </Switch>
    );
};
