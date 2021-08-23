//Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary, Table } from '../../components';

type PropTypes = {};

const UserInfo: FC<PropTypes> = () => {
    const fakeTableData = [
        [ 'Race', 'Class', 'Name' ],
        [ 'Dwarf', 'Warrior', 'Durin' ],
        [ 'Hobbit', 'Rouge', 'Bilbo' ],
        [ 'Human', 'Mage', 'Hendalf' ],
    ];

    return (
        <Table data = { fakeTableData } />
    );
};

export default () => (
    <ErrorBoundary>
        <UserInfo />
    </ErrorBoundary>
);
