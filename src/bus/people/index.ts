// Core
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Hooks
import { useSelector } from '../../tools/hooks';

// // API
// import { fetchPeopleAsync } from './thunk';

// Togglers
import { useTogglersRedux } from '../client';
import { fetchPeople } from './thunk/api/apiFetchPeople';
import { fillPeopleAction } from './actions';

export const usePeople = () => {
    const dispatch = useDispatch();
    const data = useSelector(({ people }) => people);
    const { togglersRedux: { isPeopleFetching }, setTogglerAction } = useTogglersRedux();

    useEffect(() => {
        (async () => {
            setTogglerAction({
                type:  'isPeopleFetching',
                value: true,
            });
            const data = await fetchPeople();

            dispatch(fillPeopleAction(data));

            setTogglerAction({
                type:  'isPeopleFetching',
                value: false,
            });
        })();
    }, []);

    return {
        data,
        isFetching: isPeopleFetching,
    };
};
