//Core
import React, { FC, useState } from 'react';

// Styles
import { TableContainer, TableRow, TableCell, TableHead } from './styles';


type PropTypes = {
    data: Array<Array<string>>,
    headColor?: string,
    onRowClick?: (rowId: number) => void
};

export const Table: FC<PropTypes> = ({ data, headColor = 'pink', onRowClick }) => {
    const [ selectedRow, setSelectedRow ] = useState<number>();

    return (
        <TableContainer>
            <tbody>
                {data.map((row, index) => {
                    return (
                        <TableRow
                            className = { `${index === 0 ? 'table-header' : ''} ${selectedRow === index ? 'selected' : ''}` }
                            key = { `row-${index + 1}` }
                            onClick = { () => {
                                if (index !== 0) {
                                    onRowClick && onRowClick(index - 1);
                                    setSelectedRow(index);
                                }
                            } }>
                            {
                                row.map((cell) => {
                                    if (index === 0) {
                                        return (
                                            <TableHead
                                                bgColor = { headColor }
                                                key = { `row-head-${cell}` }>
                                                {cell}
                                            </TableHead>
                                        );
                                    }

                                    return <TableCell key = { `row-head-${cell}` } >{cell}</TableCell>;
                                })
                            }
                        </TableRow>
                    );
                })}
            </tbody>
        </TableContainer>
    );
};
