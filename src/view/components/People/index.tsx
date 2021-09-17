//Core
import React, { FC } from 'react';

//Types
import { People as PeopleType } from '../../../bus/people/types';

//Components
import { Table } from '../Table';


type PropTypes = {
    peopleList: PeopleType
    selectPerson?: (id: number) => void
};

export const People: FC<PropTypes> = ({ peopleList, selectPerson }) => {
    return (

        <Table
            data = { peopleList.reduce((personList: Array<Array<string>>, person, index) => {
                if (index === 0) {
                    personList.push([ 'Name', 'Birth Year' ]);
                }
                personList.push([
                    person.name,
                    person.birth_year,
                ]);

                return personList;
            }, []) }
            onRowClick = { selectPerson }
        />
    );
};
