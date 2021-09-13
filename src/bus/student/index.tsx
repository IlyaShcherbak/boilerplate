//Core
import React, { FC } from 'react';

//Components
import { StudentRegistration } from './components';
import { Profile } from '../../view/components';

//Helpers
import { validateAge, validateEmail, validateNameAndSurname, validateSpeciality } from '../../tools/helpers/validations';

type PropTypes = {};

export const ReduxApp: FC<PropTypes> = () => {
    return (
        <>
            <StudentRegistration
                validateAge = { validateAge }
                validateEmail = { validateEmail }
                validateNameAndSurname = { validateNameAndSurname }
                validateSpeciality = { validateSpeciality }
            />
            <Profile />
        </>
    );
};
