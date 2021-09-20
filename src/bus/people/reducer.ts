//Core
import { Reducer } from 'redux';

//Types
import * as types from './types';


// const InitialState: types.PeopleStateType = {
//     data:       [],
//     isFetching: false,
//     error:      '',
// };

const InitialState: types.People = [];

export const peopleReducer: Reducer<types.People, types.PeopleActionTypes> = (state = InitialState, action) => {
    switch (action.type) {
        case types.PEOPLE_FILL:
            return action.payload;

        default:
            return state;
    }
};
