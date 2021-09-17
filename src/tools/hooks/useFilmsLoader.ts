// Hooks
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//Actions
import { fetchFilmsAsync } from '../../bus/films/actions';

//Types
import { FilmsStateType } from '../../bus/films/types';


export const useFilmsleLoader = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFilmsAsync());
    }, []);

    const { data, isFetching, error } = useSelector((state: { films: FilmsStateType }) => state.films);

    return {
        isFetching,
        data,
        error,
    };
};
