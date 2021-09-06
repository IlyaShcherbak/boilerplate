// Core
import { lazy } from 'react';

export const Main = lazy(() => import(/* webpackChunkName: "Main" */ './Main'));
export const UserInfo = lazy(() => import(/* webpackChunkName: "UserInfo" */ './UserInfo'));
export const CourseTasks = lazy(() => import(/* webpackChunkName: "CourseTasks" */ './CourseTasks'));
export const Contacts = lazy(() => import(/* webpackChunkName: "Contacts" */ './Contacts'));
export const Secret = lazy(() => import(/* webpackChunkName: "Secret" */ './Secret'));
