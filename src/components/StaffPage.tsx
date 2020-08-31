import React from 'react';
import {
  Box,
  grommet,
  Grommet,
  Heading,
  DataTable,
  Meter,
  ColumnConfig,
} from 'grommet';

import { useRouteMatch } from 'react-router-dom';
import DashboardLayout from './layouts/main';

export declare type AlignType = 'left' | 'center' | 'right';

export default () => {
  const match = useRouteMatch();

  const columns = [
    {
      property: 'name',
      header: 'Name',
      primary: true,
      footer: 'Total',
    },
    {
      property: 'lastname',
      header: 'Lastname',
      primary: true,
      footer: 'Total',
    },
    {
      property: 'location',
      header: 'location',
    },
  ];

  const DATA = [
    {
      name: 'Alan',
      lastname: 'Alan',
      location: '',
    },
    {
      name: 'Bryan',
      lastname: 'Alan',
      location: 'Mz8968-V8',
    },
    {
      name: 'Chris',
      lastname: 'Alan',
      location: 'Mz8968-V8',
    },
    {
      name: 'Eric',
      lastname: 'Alan',
      location: 'Mz8968-V8',
    },
    {
      name: 'Doug',
      lastname: 'Alan',
      location: 'Mz8968-V8',
    },
    {
      name: 'Jet',
      lastname: 'Alan',
      location: 'Mz8968-V8',
    },
    {
      name: 'Michael',
      lastname: 'Alan',
      location: 'Mz8968-V8',
    },
    {
      name: 'Tracy',
      lastname: 'Alan',
      location: 'Mz8968-V8',
    },
  ];

  return (
    <DashboardLayout actions={[{ type: 'add', to: `${match.path}/register` }]}>
      <Heading level="3">Residentes</Heading>
      <Grommet theme={grommet}>
        <Box align="center" pad="large">
          <DataTable columns={columns} data={DATA} />
        </Box>
      </Grommet>
    </DashboardLayout>
  );
};
