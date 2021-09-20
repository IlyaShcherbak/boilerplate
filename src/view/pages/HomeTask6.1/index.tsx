// Core
import React, { FC } from 'react';

// Components
import { LinkButton, Profile, StudentRegistration } from '../../components';

// Elements
import { PageContainer, PageTitle } from '../../elements';

// Helpers
import { book } from '../../App/Routes/book';

//Validations
import { validateAge, validateEmail, validateNameAndSurname, validateSpeciality } from '../../../tools/helpers/validations';


type PropTypes = {};

const HomeTask61: FC<PropTypes> = () => {
    return (
        <PageContainer>
            <PageTitle>Home task 6.1</PageTitle>
            <LinkButton
                text = 'Back to Tasks'
                to = { book.courseTasks }
            />
            <section>
                <StudentRegistration
                    validateAge = { validateAge }
                    validateEmail = { validateEmail }
                    validateNameAndSurname = { validateNameAndSurname }
                    validateSpeciality = { validateSpeciality }
                />
                <Profile />
            </section>
        </PageContainer>
    );
};

export default HomeTask61;
