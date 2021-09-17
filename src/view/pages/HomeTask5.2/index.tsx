//Core
import React, { FC } from 'react';

// Components
import { LinkButton, StudentRegistration } from '../../components';

//Elements
import { PageContainer, PageTitle } from '../../elements';

//Helpers
import { book } from '../../App/Routes/book';
import { validateAge, validateEmail, validateNameAndSurname, validateSpeciality } from '../../../tools/helpers/validations';


type PropTypes = {};

const HomeTask52: FC<PropTypes> = () => {
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
