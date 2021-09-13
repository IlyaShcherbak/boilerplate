export const validateNameAndSurname = (value: string) => {
    let error = '';
    if (value === '') {
        error = 'Required field';
    } else if (!/^[a-zA-Z]+$/i.test(value)) {
        error = 'Contain invalid characters';
    }

    return error;
};

export const validateEmail = (value: string) => {
    let error = '';
    if (value === '') {
        error = 'Required field';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }

    return error;
};

export const validateAge = (value: string) => {
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

export const validateSpeciality = (value: string) => {
    let error = '';
    if (value === '') {
        error = 'Required field';
    }

    return error;
};
