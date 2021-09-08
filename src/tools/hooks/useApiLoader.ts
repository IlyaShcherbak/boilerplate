// Core
import { useEffect, useState } from 'react';

export const useApiLoader = (apiLoader: () => Promise<Response>) => {
    const [ fetchedData, setFetchedData ] = useState([]);
    const [ isFetching, setIsFetching ] = useState(false);
    const [ isServerError, setIsServerError ] = useState(false);

    useEffect(() => {
        (async () => {
            setIsFetching(true);
            const responceJson = await apiLoader();

            console.log(responceJson.status);

            if (responceJson.status !== 200) {
                setIsServerError(true);
            } else {
                const responce = await responceJson.json();
                setFetchedData(responce.data);
            }
            setIsFetching(false);
        })();
    }, []);

    return {
        isFetching,
        fetchedData,
        isServerError,
    };
};
