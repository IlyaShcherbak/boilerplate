// Fetch
export const FETCH_PEOPLE_ASYNC = 'FETCH_PEOPLE_ASYNC';
export type fetchPeopleActionAsync = {
    type: typeof FETCH_PEOPLE_ASYNC
}
export type FetchPeopleContact = () => fetchPeopleActionAsync
