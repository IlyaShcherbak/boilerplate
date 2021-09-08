// Core
import styled from 'styled-components';

export const StudentRegistrationContainer = styled.div`
    margin-top: 50px;
    margin-bottom: 20px;
`;

export const StyledFields = styled.div`
    padding: 5px;
    width: 300px;
    margin: 15px;
    display: grid;
    grid-template-columns: 100px 1fr;

    &.invalid {
        border: 2px solid red;
    }

    .error {
        grid-column-start: 2;
        margin-top: 10px;
        color: red;
    }
`;

export const StyledFieldsRadio = styled(StyledFields)`
    width: 170px;
`;

export const StyledFieldsDropdown = styled(StyledFields)`
    width: 205px;
    margin-left: 0;
`;

export const StyledButtonSubmit = styled.button`
    font-family: 'Helvetica';
    margin: 10px 10px 10px 0;
    width: 100px;
    height: 25px;
    background-color: lightgreen;
`;
