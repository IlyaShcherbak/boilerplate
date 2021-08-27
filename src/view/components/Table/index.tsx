//Core
import React, { FC, useState } from 'react';

// Styles
import { TableContainer, TableRow, TableCell, TableHead } from './styles';


type PropTypes = {
    data: Array<Array<string>>;
};

export const Table: FC<PropTypes> = ({ data }) => {
    const [ selectedRow, setSelectedRow ] = useState<number>();
    const backGroundColor = 'cadetblue';

    return (
        <TableContainer>
            <tbody>
                {data.map((row, index) => {
                    return (
                        <TableRow
                            className = { `${index === 0 ? 'table-header' : ''} ${selectedRow === index ? 'selected' : ''}` }
                            onClick = { () => setSelectedRow(index) }>
                            {
                                row.map((cell) => {
                                    if (index === 0) {
                                        return <TableHead backGroundColor = { backGroundColor }>{cell}</TableHead>;
                                    }

                                    return <TableCell>{cell}</TableCell>;
                                })
                            }
                        </TableRow>
                    );
                })}
            </tbody>
        </TableContainer>
    );
};
