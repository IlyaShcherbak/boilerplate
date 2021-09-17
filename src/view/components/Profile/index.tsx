//Core
import React, { FC } from 'react';

// Styles
import { PageContainer, StudentField, StudentFields } from './styles';

//Hooks
import { useStudent } from '../../../bus/student/hooks/useStudent';
import { Table } from '..';

type PropTypes = {};

export const Profile: FC<PropTypes> = () => {
    const { current, students } = useStudent();
    console.log(students);


    if (!current) {
        return <> </>;
    }

    return (
        <PageContainer>
            <StudentFields>
                <StudentField>First name: { current.firstName}</StudentField>
                <StudentField>Surname: { current.surname}</StudentField>
                <StudentField>Age: { current.age}</StudentField>
                <StudentField>Email: { current.email}</StudentField>
                <StudentField>Sex: { current.picked}</StudentField>
                <StudentField>Speciality: { current.speciality}</StudentField>
            </StudentFields>
            <Table
                data = { students.reduce((data: Array<Array<string>>, student, index) => {
                    if (index === 0) {
                        data.push([ 'First name', 'Surname', 'Age', 'Email', 'Sex', 'Speciality' ]);
                    }
                    data.push([
                        student.firstName,
                        student.surname,
                        student.age,
                        student.email,
                        student.picked,
                        student.speciality,
                    ]);

                    return data;
                }, []) }
            />
        </PageContainer>
    );
};
