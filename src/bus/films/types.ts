export type Film = {
    title: string,
    episode_id: number,
    opening_crawl: string,
    director: string,
    producer : string,
    release_date: string,
    species: Array<string>,
    starships: Array<string>,
    vehicles: Array<string>,
    characters: Array<string>,
    planets: Array<string>,
    url: string,
    created: string,
    edited: string,
}

export type Films = Array<Film>;

export type FilmsStateType = {
    data: Films,
    isFetching: boolean,
    error: string,
}


export const FILMS_START_FETCHING = 'FILMS_START_FETCHING';
export type StartFetchingFilmsActionType = {
    type: typeof FILMS_START_FETCHING;
};
export type StartFetchingFilmsContract = () => StartFetchingFilmsActionType

export const FILMS_STOP_FETCHING = 'FILMS_STOP_FETCHING';
export type StopFetchingFilmsActionType = {
    type: typeof FILMS_STOP_FETCHING;
};
export type StopFetchingFilmsContract = () => StopFetchingFilmsActionType

export const FILMS_FILL = 'FILMS_FILL';
export type FillFilmsActionType = {
    type: typeof FILMS_FILL,
    payload: Films
};
export type FillFilmsContract = (payload: Films) => FillFilmsActionType

export const FILMS_SET_FETCHING_ERROR = 'FILMS_SET_FETCHING_ERROR';
export type SetErrorFetchingFilmsActionType = {
    type: typeof FILMS_SET_FETCHING_ERROR;
    payload: string,
};
export type SetErrorFetchingFilmsContract = (payload: string) => SetErrorFetchingFilmsActionType

export type dispatchFilmsActionType = (action: FilmsActionTypes) => void;

export type FilmsActionTypes =
    | StartFetchingFilmsActionType
    | StopFetchingFilmsActionType
    | FillFilmsActionType
    | SetErrorFetchingFilmsActionType
