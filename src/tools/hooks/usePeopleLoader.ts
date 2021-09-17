// Hooks
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//Actions
import { fetchPeopleAsync } from '../../bus/people/actions';

//Types
import { PeopleStateType } from '../../bus/people/types';


export const usePeopleLoader = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPeopleAsync());
    }, []);

    const { data, isFetching, error } = useSelector((state: { people: PeopleStateType }) => state.people);

    return {
        isFetching,
        data,
        error,
    };
};
