//API
import { api } from './ApiPeopleFilms';

// Instruments
import * as types from './types';

export const startFetchingPeopleAction: types.StartFetchingPersonContract = () => ({
    type: types.PEOPLE_START_FETCHING,
});

export const stopFetchingPeopleAction: types.StopFetchingPersonContract = () => ({
    type: types.PEOPLE_STOP_FETCHING,
});

export const FillPeopleAction: types.FillPersonContract = (payload) => ({
    type: types.PEOPLE_FILL,
    payload,
});

export const setFetchingErrorPeopleAction: types.SetErrorFetchingPersonContract = (error) => ({
    type:    types.PEOPLE_SET_FETCHING_ERROR,
    payload: error,
});

export const fetchPeopleAsync = () => async (dispatch: types.dispatchPersonActionType) => {
    dispatch(startFetchingPeopleAction());
    const response = await api.people.fetch();

    if (response.status === 200) {
        const { results } = await response.json();

        dispatch(FillPeopleAction(results));
    } else {
        const error = {
            status: response.status,
        };
        dispatch(setFetchingErrorPeopleAction(error.status.toString()));
    }
    dispatch(stopFetchingPeopleAction());
};
