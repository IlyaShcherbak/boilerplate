// Core
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Hooks
import { useSelector } from '../hooks/useSelector';

// Actions
import { fetchPeopleAsync } from '../../bus/people/actions';

// Types
// import { PeopleStateType } from '../../bus/people/types';


export const usePeopleLoader = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPeopleAsync());
    }, []);

    const { data, isFetching, error } = useSelector(({ people }) => people);

    return {
        isFetching,
        data,
        error,
    };
};
