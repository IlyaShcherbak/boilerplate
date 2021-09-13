
export type Student = {
    firstName: string,
    surname: string,
    age: string,
    email: string,
    picked: string,
    speciality: string,
}

export type Students = Array<Student>;

export type StudentStateType = {
    students: Students
}

// ----------------------------- Create -----------------------------
export const ADD_STUDENT = 'ADD_STUDENT';
export type AddStudentActionType = {
    type: typeof ADD_STUDENT;
    payload: Student;
};
export type SetStudentContract = (payload: Student) => AddStudentActionType

export type StudentsActionTypes =
    | AddStudentActionType

