// Types
import { FetchPeople } from './types';

// Constants
import { API_PEOPLE_URL } from '../../../../init';

export const fetchPeople: FetchPeople = async () => {
    try {
        const response = await fetch(API_PEOPLE_URL);

        if (response.status !== 200) {
            throw Error('Failed people fetching');
        }

        const data = await response.json();

        return data.results;
    } catch (error) {
        console.log(error);
    }
};
