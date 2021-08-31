// Core
import styled from 'styled-components';

export const TableContainer = styled.table`
    margin: 15px 40px 30px;
`;

type thProps = {
    bgColor: string,
};
export const TableHead = styled.th<thProps>`
    border-bottom: 2px solid ${({ theme }) => theme.first.primary};
    padding: 10px 20px;
    font-weight: 600;
    font-size: 20px;
    color: ${({ theme }) => theme.first.primary};
    background-color: ${ (props) => props.bgColor };
`;

export const TableRow = styled.tr`
    cursor: pointer;

    :hover {
        background-color: ${({ theme }) => theme.first.containerBg};
    }

    &.selected {
        background-color: ${({ theme }) => theme.first.hoverSecondary};
    }

    &.table-header {
        background-color: initial;
    }
`;

export const TableCell = styled.td`
    border-bottom: 1px solid ${({ theme }) => theme.first.secondary};
    padding: 10px 20px;
    text-align: center;
`;
