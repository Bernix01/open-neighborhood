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

  const amountFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

  const columns: ColumnConfig<{
    date?: string | number | Date;
    percent?: number;
    paid?: number;
  }>[] = [
    {
      property: 'name',
      header: 'Name',
      primary: true,
      footer: 'Total',
    },
    {
      property: 'location',
      header: 'location',
    },
    {
      property: 'date',
      header: 'Date',
      render: (datum) =>
        datum.date && new Date(datum.date).toLocaleDateString('en-US'),
      align: 'end',
    },
    {
      property: 'percent',
      header: 'Percent Complete',
      render: (datum) => (
        <Box pad={{ vertical: 'xsmall' }}>
          <Meter
            values={[{ value: datum.percent! }]}
            thickness="small"
            size="small"
          />
        </Box>
      ),
    },
    {
      property: 'paid',
      header: 'Paid',
      render: (datum) => amountFormatter.format(datum.paid! / 100),
      align: 'end',
      aggregate: 'sum',
      footer: { aggregate: true },
    },
  ];

  const DATA = [
    {
      name: 'Alan',
      location: '',
      date: '',
      percent: 0,
      paid: 0,
    },
    {
      name: 'Bryan',
      location: 'Mz8968-V8',
      date: '2018-06-10',
      percent: 30,
      paid: 1234,
    },
    {
      name: 'Chris',
      location: 'Mz8968-V8',
      date: '2018-06-09',
      percent: 40,
      paid: 2345,
    },
    {
      name: 'Eric',
      location: 'Mz8968-V8',
      date: '2018-06-11',
      percent: 80,
      paid: 3456,
    },
    {
      name: 'Doug',
      location: 'Mz8968-V8',
      date: '2018-06-10',
      percent: 60,
      paid: 1234,
    },
    {
      name: 'Jet',
      location: 'Mz8968-V8',
      date: '2018-06-09',
      percent: 40,
      paid: 3456,
    },
    {
      name: 'Michael',
      location: 'Mz8968-V8',
      date: '2018-06-11',
      percent: 50,
      paid: 1234,
    },
    {
      name: 'Tracy',
      location: 'Mz8968-V8',
      date: '2018-06-10',
      percent: 10,
      paid: 2345,
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
