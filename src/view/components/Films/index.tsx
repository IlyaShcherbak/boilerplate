//Core
import React, { FC } from 'react';

//Types
import { Films as FilmsType } from '../../../bus/films/types';

//Components
import { Table } from '../Table';


type PropTypes = {
    dataList: FilmsType
    selectItem?: (id: number) => void
};

export const FilmsList: FC<PropTypes> = ({ dataList, selectItem }) => {
    return (
        <Table
            data = { dataList.reduce((list: Array<Array<string>>, film, index) => {
                if (index === 0) {
                    list.push([ 'Title', 'Release Date' ]);
                }
                list.push([
                    film.title,
                    film.release_date,
                ]);

                return list;
            }, []) }
            onRowClick = { selectItem }
        />
    );
};
