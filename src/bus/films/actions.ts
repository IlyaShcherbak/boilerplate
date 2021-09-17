//API
import { api } from '../people/ApiPeopleFilms';

// Instruments
import * as types from './types';

export const startFetchingFilmsAction: types.StartFetchingFilmsContract = () => ({
    type: types.FILMS_START_FETCHING,
});

export const stopFetchingFilmsAction: types.StopFetchingFilmsContract = () => ({
    type: types.FILMS_STOP_FETCHING,
});

export const FillFilmsAction: types.FillFilmsContract = (payload) => ({
    type: types.FILMS_FILL,
    payload,
});

export const setFetchingErrorFilmsAction: types.SetErrorFetchingFilmsContract = (error) => ({
    type:    types.FILMS_SET_FETCHING_ERROR,
    payload: error,
});

export const fetchFilmsAsync = () => async (dispatch: types.dispatchFilmsActionType) => {
    dispatch(startFetchingFilmsAction());
    const response = await api.films.fetch();

    if (response.status === 200) {
        const { results } = await response.json();

        dispatch(FillFilmsAction(results));
    } else {
        const error = {
            status: response.status,
        };
        dispatch(setFetchingErrorFilmsAction(error.status.toString()));
    }
    dispatch(stopFetchingFilmsAction());
};
