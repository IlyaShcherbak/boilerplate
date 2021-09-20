//
export type Person = {
    name: string,
    height: string,
    birth_year: string,
    eye_color: string,
    gender: string,
    hair_color: string,
    mass : string,
    skin_color : string,
    homeworld : string,
    films: Array<string>,
    species: Array<string>,
    starships: Array<string>,
    vehicles: Array<string>,
    url: string,
    created: string,
    edited: string,
}

export type People = Array<Person>;

export type PeopleStateType = {
    data: People,
    isFetching: boolean,
    error: string,
}

//     //Async
//     PEOPLE_FETCH_ASYNC: 'PEOPLE_FETCH_ASYNC ',


// export const PEOPLE_START_FETCHING = 'PEOPLE_START_FETCHING';
// export type StartFetchingPersonActionType = {
//     type: typeof PEOPLE_START_FETCHING;
// };
// export type StartFetchingPersonContract = () => StartFetchingPersonActionType

// export const PEOPLE_STOP_FETCHING = 'PEOPLE_STOP_FETCHING';
// export type StopFetchingPersonActionType = {
//     type: typeof PEOPLE_STOP_FETCHING;
// };
// export type StopFetchingPersonContract = () => StopFetchingPersonActionType

export const PEOPLE_FILL = 'PEOPLE_FILL';
export type FillPersonActionType = {
    type: typeof PEOPLE_FILL,
    payload: People
};
export type FillPersonContract = (payload: People) => FillPersonActionType

// export const PEOPLE_SET_FETCHING_ERROR = 'PEOPLE_SET_FETCHING_ERROR';
// export type SetErrorFetchingPersonActionType = {
//     type: typeof PEOPLE_SET_FETCHING_ERROR;
//     payload: string,
// };
// export type SetErrorFetchingPersonContract = (payload: string) => SetErrorFetchingPersonActionType

// export type dispatchPersonActionType = (action: PeopleActionTypes) => void;

export type PeopleActionTypes =
    // | StartFetchingPersonActionType
    // | StopFetchingPersonActionType
    | FillPersonActionType
    // | SetErrorFetchingPersonActionType
