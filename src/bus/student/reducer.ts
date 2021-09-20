// Core
import { Reducer } from 'redux';

//Types
import * as types from './types';

const initialState: types.Student = {
    firstName:  '',
    surname:    '',
    age:        '',
    email:      '',
    picked:     '',
    speciality: '',
};

export const studentReducer: Reducer<types.Student, types.StudentsActionTypes> = (state = initialState, action) =>{
    switch (action.type) {
        case types.ADD_STUDENT:
            return action.payload;

        default:
            return state;
    }
};
