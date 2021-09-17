//Core
import { Reducer } from 'react';

//Types
import * as types from './types';


const InitialState: types.FilmsStateType = {
    data:       [],
    isFetching: false,
    error:      '',
};

export const filmsReducer: Reducer<types.FilmsStateType, types.FilmsActionTypes> = (state = InitialState, action) => {
    switch (action.type) {
        case types.FILMS_START_FETCHING:
            return {
                ...state,
                isFetching: true,
            };
        case types.FILMS_STOP_FETCHING:
            return {
                ...state,
                isFetching: false,
            };
        case types.FILMS_SET_FETCHING_ERROR:
            return {
                ...state,
                error: action.payload,
                data:  [],
            };
        case types.FILMS_FILL:
            return {
                ...state,
                data:  action.payload,
                error: '',
            };

        default:
            return state;
    }
};
