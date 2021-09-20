// Types
import * as types from './types';

export const addStudentAction: types.SetStudentContract = (payload) => ({
    type: types.ADD_STUDENT,
    payload,
});
