//Core
import React, { FC } from 'react';
import { Formik, Form, Field } from 'formik';

// Styles
import { StudentRegistrationContainer, StyledFields, StyledFieldsRadio, StyledFieldsDropdown, StyledButtonSubmit } from '../styles';

//Hooks
import { useStudent } from '../hooks/useStudent';

//Types
import { Student } from '../types';


type PropTypes = {
    validateNameAndSurname?: (value: string) => string,
    validateEmail?: (value: string) => string,
    validateAge?: (value: string) => string,
    validateSpeciality?: (value: string) => string,
};

export const StudentRegistration: FC<PropTypes> = ({ validateNameAndSurname, validateEmail,
    validateAge, validateSpeciality }) => {
    const initialValues: Student = { firstName: '', surname: '', age: '', email: '', picked: 'Male', speciality: '' };

    const { addStudent } = useStudent();

    return (
        <StudentRegistrationContainer>
            <h1>Student Registration</h1>
            <Formik
                initialValues = { initialValues }
                onSubmit = { (values) => {
                    addStudent(values);
                    console.log({ values });
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
