// Core
import { Dispatch } from 'redux';

// Actions
import { fillPeopleAction } from '../actions';

// API
import { fetchPeople } from './api/apiFetchPeople';

export const fetchPeopleAsync = async (dispatch: Dispatch) => {
    const data = await fetchPeople();

    dispatch(fillPeopleAction(data));
};
