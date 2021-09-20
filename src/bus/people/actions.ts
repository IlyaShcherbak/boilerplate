// //API
// import { api } from './ApiPeopleFilms';

// Instruments
import * as types from './types';


export const fillPeopleAction: types.FillPersonContract = (payload) => ({
    type: types.PEOPLE_FILL,
    payload,
});

