const uri = 'https://swapi.dev/api';

export const api = {
    people: {
        fetch: async () => {
            const responce = await fetch(`${uri}/people`);

            return responce;
        },
    },
    films: {
        fetch: async () => {
            const responce = await fetch(`${uri}/films`);

            return responce;
        },
    },
};
