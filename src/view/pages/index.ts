// Core
import { lazy } from 'react';

export const Main = lazy(() => import(/* webpackChunkName: "Main" */ './Main'));
export const UserInfo = lazy(() => import(/* webpackChunkName: "UserInfo" */ './UserInfo'));
