const uri = 'https://reqres.in/api';

export const api = {
    users: {
        fetch: async () => {
            const responce = await fetch(`${uri}/users?delay=3`);
            console.log(responce);

            return responce;
        },
    },
};
