//Core
import React, { FC } from 'react';

// Styles
import { PageContainer, StudentField, StudentFields } from './styles';

//Hooks
import { useStudent } from '../../../bus/student';

type PropTypes = {};

export const Profile: FC<PropTypes> = () => {
    const { data } = useStudent();

    if (data.firstName === '') {
        return <> </>;
    }

    return (
        <PageContainer>
            <StudentFields>
                <StudentField>First name: { data.firstName}</StudentField>
                <StudentField>Surname: { data.surname}</StudentField>
                <StudentField>Age: { data.age}</StudentField>
                <StudentField>Email: { data.email}</StudentField>
                <StudentField>Sex: { data.picked}</StudentField>
                <StudentField>Speciality: { data.speciality}</StudentField>
            </StudentFields>
        </PageContainer>
    );
};
