import { Reducer } from 'redux';
import * as types from './types';

const initialState: types.Students = [];

export const studentReducer: Reducer<types.Students, types.StudentsActionTypes> = (state = initialState, action) =>{
    switch (action.type) {
        case types.ADD_STUDENT:
            console.log(action.payload);

            return [ ...state, action.payload ];

        default:
            return state;
    }
};
