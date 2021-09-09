//Core
import React, { FC } from 'react';

// Components
import { LinkButton } from '../../components';
import { StudentRegistration } from '../../../bus/student/components';

//Elements
import { PageContainer, PageTitle } from '../../elements';

//Helpers
import { book } from '../../App/Routes/book';


type PropTypes = {};

const HomeTask52: FC<PropTypes> = () => {
    const validateNameAndSurname = (value: string) => {
        let error = '';
        if (value === '') {
            error = 'Required field';
        } else if (!/^[a-zA-Z]+$/i.test(value)) {
            error = 'Contain invalid characters';
        }

        return error;
    };

    const validateEmail = (value: string) => {
        let error = '';
        if (value === '') {
            error = 'Required field';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = 'Invalid email address';
        }

        return error;
    };

    const validateAge = (value: string) => {
        let error = '';
        if (!/^\d+$/i.test(value)) {
            error = 'Contain invalid characters';
        }

        const numericValue = Number(value);
        console.log(numericValue);

        if  (numericValue < 6  || numericValue > 60) {
            error = 'Age should be more than 6 and less then 60';
        }

        return error;
    };

    const validateSpeciality = (value: string) => {
        let error = '';
        if (value === '') {
            error = 'Required field';
        }

        return error;
    };

    return (
        <PageContainer>
            <PageTitle>Home task 5.2</PageTitle>
            <LinkButton
                text = 'Back to Tasks'
                to = { book.courseTasks }
            />
            <StudentRegistration
                validateAge = { validateAge }
                validateEmail = { validateEmail }
                validateNameAndSurname = { validateNameAndSurname }
                validateSpeciality = { validateSpeciality }
            />
        </PageContainer>
    );
};

export default HomeTask52;
