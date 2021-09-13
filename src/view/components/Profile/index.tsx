//Core
import React, { FC } from 'react';

//Types
// import { Student } from '../types';

// Styles
import { PageContainer, StudentField } from './styles';

//Hooks
import { useStudent } from '../../../bus/student/hooks/useStudent';

type PropTypes = {};

export const Profile: FC<PropTypes> = () => {
    const { current } = useStudent();

    if (!current) {
        return <> </>;
    }

    return (
        <PageContainer>
            <StudentField>First name: { current.firstName}</StudentField>
            <StudentField>Surname: { current.surname}</StudentField>
            <StudentField>Age: { current.age}</StudentField>
            <StudentField>Email: { current.email}</StudentField>
            <StudentField>Sex: { current.picked}</StudentField>
            <StudentField>Speciality: { current.speciality}</StudentField>
        </PageContainer>
    );
};
