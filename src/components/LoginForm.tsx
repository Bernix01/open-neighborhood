import React from 'react';
import {
  Grommet,
  Main,
  Heading,
  Form,
  FormField,
  TextInput,
  Button,
  ThemeType,
} from 'grommet';
import { Home, MailOption, Lock, LinkNext } from 'grommet-icons';

const theme: ThemeType = {
  global: {
    colors: {
      background: {
        light: '#ffffff',
        dark: '#000000',
      },
    },
    font: {
      family:
        '-apple-system,\n         BlinkMacSystemFont, \n         "Segoe UI", \n         Roboto, \n         Oxygen, \n         Ubuntu, \n         Cantarell, \n         "Fira Sans", \n         "Droid Sans",  \n         "Helvetica Neue", \n         Arial, sans-serif,  \n         "Apple Color Emoji", \n         "Segoe UI Emoji", \n         "Segoe UI Symbol"',
    },
  },
};
export default () => {
  return (
    <Grommet full theme={theme}>
      <Main
        fill="vertical"
        flex="grow"
        overflow="auto"
        justify="center"
        direction="column"
        align="center"
      >
        <Home size="large" color="brand" />
        <Heading level="1" textAlign="center" color="brand">
          LA ALAMEDA
        </Heading>
        <Heading level="3" textAlign="center">
          Iniciar sesión
        </Heading>
        <Form>
          <FormField label="Correo" required>
            <TextInput
              icon={<MailOption />}
              type="text"
              placeholder="email@ejemplo.com"
            />
          </FormField>
          <FormField label="Contraseña" required>
            <TextInput icon={<Lock />} type="password" placeholder="****" />
          </FormField>
          <Button
            label="Ingresar"
            icon={<LinkNext />}
            primary
            secondary={false}
            type="submit"
          />
        </Form>
      </Main>
    </Grommet>
  );
};
