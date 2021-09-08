//Core
import React, { FC } from 'react';
import { Formik, Form, Field } from 'formik';

// Styles
import { StudentRegistrationContainer, StyledFields, StyledFieldsRadio, StyledFieldsDropdown, StyledButtonSubmit } from './styles';

type PropTypes = {};
type MyFormValues = {
    firstName: string,
    surname: string,
    age: number,
    email: string,
    picked: string,
    speciality: string,
};

function validateNameAndSurname(value: string) {
    let error = '';
    if (value === '') {
        error = 'Required field';
    } else if (!/^[a-zA-Z]+$/i.test(value)) {
        error = 'Contain invalid characters';
    }

    return error;
}

function validateEmail(value: string) {
    let error = '';

    if (value === '') {
        error = 'Required field';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }

    return error;
}

function validateAge(value: string) {
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
}

function validateSpeciality(value: string) {
    let error = '';

    if (value === '') {
        error = 'Required field';
    }

    return error;
}

export const StudentRegistration: FC<PropTypes> = () => {
    const initialValues: MyFormValues = { firstName: '', surname: '', age: 6, email: '', picked: 'Male', speciality: '' };

    return (
        <StudentRegistrationContainer>
            <h1>Student Registration</h1>
            <Formik
                initialValues = { initialValues }
                onSubmit = { (values, actions) => {
                    console.log({ values, actions });
                } }>

                {({ errors, touched }) => (
                    <Form>
                        <StyledFields className = { touched.firstName && errors.firstName ? 'invalid' : '' }>
                            <label htmlFor = 'firstName'>First Name: </label>
                            <Field
                                id = 'firstName'
                                name = 'firstName'
                                placeholder = 'First Name'
                                validate = { validateNameAndSurname }
                            />
                            <span className = 'error'> { touched.firstName && errors.firstName } </span>
                        </StyledFields>

                        <StyledFields className = { touched.surname && errors.surname ? 'invalid' : '' }>
                            <label htmlFor = 'surname'>Surname: </label>
                            <Field
                                id = 'surname'
                                name = 'surname'
                                placeholder = 'Surname'
                                validate = { validateNameAndSurname }
                            />
                            <span className = 'error'> { touched.surname && errors.surname } </span>
                        </StyledFields>

                        <StyledFields className = { touched.age && errors.age ? 'invalid' : '' }>
                            <label htmlFor = 'age'>Age: </label>
                            <Field
                                id = 'age'
                                name = 'age'
                                placeholder = 'Age'
                                validate = { validateAge }
                            />
                            <span className = 'error'> { touched.age && errors.age } </span>
                        </StyledFields>

                        <StyledFields className = { touched.email && errors.email ? 'invalid' : '' }>
                            <label htmlFor = 'email'>Email: </label>
                            <Field
                                id = 'email'
                                name = 'email'
                                placeholder = 'Email'
                                validate = { validateEmail }
                            />
                            <span className = 'error'> { touched.email && errors.email } </span>
                        </StyledFields>

                        <div id = 'sex-radio-group'>Select your sex:</div>
                        <StyledFieldsRadio
                            aria-labelledby = 'sex-radio-group'
                            role = 'group'>
                            <label>
                                <Field
                                    name = 'picked'
                                    type = 'radio'
                                    value = 'Male'
                                />
                                Male
                            </label>
                            <label>
                                <Field
                                    name = 'picked'
                                    type = 'radio'
                                    value = 'Female'
                                />
                                Female
                            </label>
                        </StyledFieldsRadio>

                        <StyledFieldsDropdown className = { touched.speciality && errors.speciality ? 'invalid' : '' }>
                            <label htmlFor = 'speciality'>Speciality: </label>
                            <Field
                                as = 'select'
                                id = 'speciality'
                                name = 'speciality'
                                validate = { validateSpeciality }>
                                <option value = ''/>
                                <option value = 'designer'>Designer</option>
                                <option value = 'developer'>Developer</option>
                                <option value = 'writer'>Writer</option>
                            </Field>
                            <span className = 'error'> { touched.speciality && errors.speciality } </span>
                        </StyledFieldsDropdown>

                        <StyledButtonSubmit type = 'submit'>Submit</StyledButtonSubmit>
                    </Form>
                )}
            </Formik>
        </StudentRegistrationContainer>
    );
};
