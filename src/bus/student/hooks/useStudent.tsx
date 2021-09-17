//Hooks
import { useSelector, useDispatch } from 'react-redux';

//Actions
import { addStudentAction } from '../actions';
import { StudentStateType, Student } from '../types';


export const useStudent = () => {
    const selector = (state: StudentStateType) => state.students;
    const students = useSelector(selector);
    const dispatch = useDispatch();

    const addStudent = (sudent: Student) => {
        dispatch(addStudentAction(sudent));
    };

    return { current: students[ students.length - 1 ], students, addStudent };
};
