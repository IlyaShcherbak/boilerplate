//Core
import { Reducer } from 'react';

//Types
import * as types from './types';


const InitialState: types.PeopleStateType = {
    data:       [],
    isFetching: false,
    error:      '',
};

export const peopleReducer: Reducer<types.PeopleStateType, types.PeopleActionTypes>
= (state = InitialState, action) => {
    switch (action.type) {
        case types.PEOPLE_START_FETCHING:
            return {
                ...state,
                isFetching: true,
            };
        case types.PEOPLE_STOP_FETCHING:
            return {
                ...state,
                isFetching: false,
            };
        case types.PEOPLE_SET_FETCHING_ERROR:
            return {
                ...state,
                error: action.payload,
                data:  [],
            };
        case types.PEOPLE_FILL:
            return {
                ...state,
                data:  action.payload,
                error: '',
            };

        default:
            return state;
    }
};
