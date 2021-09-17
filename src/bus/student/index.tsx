//Core
import React, { FC } from 'react';

//Components
import { Profile, StudentRegistration } from '../../view/components';

//Helpers
import { validateAge, validateEmail, validateNameAndSurname, validateSpeciality } from '../../tools/helpers/validations';

type PropTypes = {};

export const ReduxApp: FC<PropTypes> = () => {
    return (
        <section>
            <StudentRegistration
                validateAge = { validateAge }
                validateEmail = { validateEmail }
                validateNameAndSurname = { validateNameAndSurname }
                validateSpeciality = { validateSpeciality }
            />
            <Profile />
        </section>
    );
};
