//Hooks
import { useDispatch } from 'react-redux';
import { useSelector } from '../../tools/hooks';


//Actions
import { addStudentAction } from './actions';
import { Student } from './types';


export const useStudent = () => {
    const data = useSelector(({ student }) => student);
    const dispatch = useDispatch();

    const addStudent = (data: Student) => {
        dispatch(addStudentAction(data));
    };

    return { data, addStudent };
};
