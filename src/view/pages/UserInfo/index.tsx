//Core
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

// Components
import { ErrorBoundary, Table } from '../../components';

// Elements
import { Button } from '../../elements';

type PropTypes = {};

const UserInfo: FC<PropTypes> = () => {
    const fakeTableData = [
        [ 'Race', 'Class', 'Name' ],
        [ 'Dwarf', 'Warrior', 'Durin' ],
        [ 'Hobbit', 'Rouge', 'Bilbo' ],
        [ 'Human', 'Mage', 'Hendalf' ],
    ];

    return (
        <>
            <Table data = { fakeTableData } />
            <Link to = '/'>
                <Button>Main Page</Button>
            </Link>
        </>
    );
};

export default () => (
    <ErrorBoundary>
        <UserInfo />
    </ErrorBoundary>
);
