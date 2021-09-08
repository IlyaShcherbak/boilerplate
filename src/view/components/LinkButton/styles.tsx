// Core
import styled from 'styled-components';
import { Button } from '../../elements';


export const StyledButton = styled(Button)`
    min-width: 150px;
    border-radius: 3px;
    padding: 10px 15px;
    margin: 5px 15px 5px 0;
    font-family: 'Helvetica', sans-serif;
    font-size: 15px;
    letter-spacing: 1px;

    :hover {
        background-color: ${({ theme }) => theme.second.hoverSecondary};
        color: white;
        border: 2px solid black;
    }
`;
