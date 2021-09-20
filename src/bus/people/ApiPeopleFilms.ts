const uri = 'https://swapi.dev/api';

export const api = {
    people: {
        fetch: async () => {
            const response = await fetch(`${uri}/people`);

            return response;
        },
    },
    films: {
        fetch: async () => {
            const response = await fetch(`${uri}/films`);

            return response;
        },
    },
};
