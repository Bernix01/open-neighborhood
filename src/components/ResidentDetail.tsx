import React from 'react';
import {
  Box,
  grommet,
  Grommet,
  Heading,
  Button,
  Text,
  DataTable,
  ColumnConfig,
  Select,
} from 'grommet';

import { useRouteMatch } from 'react-router-dom';
import DashboardLayout from './layouts/main';

export declare type AlignType = 'left' | 'center' | 'right';

export default () => {
  const match = useRouteMatch();
  const [value, setValue] = React.useState();
  const amountFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

  const columns: ColumnConfig<{
    date?: string | number | Date;
    paid?: number;
  }>[] = [
    {
      property: 'date',
      header: 'Date',
      render: (datum) =>
        datum.date && new Date(datum.date).toLocaleDateString('en-US'),
      align: 'end',
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
      date: '',
      paid: 0,
    },
    {
      date: '2018-06-10',
      paid: 1234,
    },
    {
      date: '2018-06-09',
      paid: 2345,
    },
    {
      date: '2018-06-11',
      paid: 3456,
    },
    {
      date: '2018-06-10',
      paid: 1234,
    },
    {
      date: '2018-06-09',
      paid: 3456,
    },
    {
      date: '2018-06-11',
      paid: 1234,
    },
    {
      date: '2018-06-10',
      paid: 2345,
    },
  ];

  return (
    <DashboardLayout actions={[{ type: 'add', to: `${match.path}/register` }]}>
      <Heading level="3">Detalle de Resident</Heading>
      <Grommet theme={grommet}>
        <Box
          direction="column"
          border={{ color: 'brand', size: 'large' }}
          pad="medium"
          gap="medium"
        >
          <Select
            options={['0001', '0002', '00003']}
            value={value}
            onChange={({ option }) => setValue(option)}
          />

          <Button primary label="Ver Más" />
          <Heading level="4">Nombre</Heading>
          <Text>simple text</Text>
          <Heading level="4">Apellido</Heading>
          <Text>simple text</Text>
          <Heading level="4">Estado</Heading>
          <Text>simple text</Text>
          <Heading level="4">Ubicación</Heading>
          <Text>simple text</Text>
          <Box align="center" pad="large">
            <DataTable columns={columns} data={DATA} />
          </Box>
        </Box>
      </Grommet>
    </DashboardLayout>
  );
};
