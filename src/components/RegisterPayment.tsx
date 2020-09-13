import React from 'react';
import { Heading, Box, Select, TextInput, Button } from 'grommet';
import DashboardLayout from './layouts/main';

type FormData = {
  user: string;
  password: string;
};

type RegisterError = {
  message: string;
};

export default () => {
  const [value, setValue] = React.useState();
  return (
    <DashboardLayout>
      <Heading level="3">Pago Alicuota</Heading>
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
        <TextInput placeholder="type here" type="number" value={value} />
        <Button primary label="Pagar" />
      </Box>
    </DashboardLayout>
  );
};
