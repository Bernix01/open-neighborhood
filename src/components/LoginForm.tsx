import React from 'react';
import {
  Grommet,
  Main,
  Heading,
  Form,
  FormField,
  TextInput,
  Button,
  Image,
  ThemeType,
} from 'grommet';
import { MailOption, Lock, LinkNext } from 'grommet-icons';
import { useMutation } from 'graphql-hooks';

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

const LOGIN_QUERY = `query GetPosts {
    posts {
      title
      author
    }
  }`;

type LoginResponse = {
  token: string;
};

export default () => {
  const [
    login,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation<LoginResponse>(LOGIN_QUERY);

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
        <Image
          src={`${process.env.PUBLIC_URL}/img/logo.png`}
          fill="horizontal"
          fit="contain"
          style={{ maxHeight: '220px' }}
        />
        <Heading level="3" textAlign="center">
          Iniciar sesión
        </Heading>
        <Form
          onSubmit={(event: React.FormEvent) => {
            event.preventDefault();
            console.log(
              'onSubmit',
              (event as any).value,
              (event as any).touched
            );
          }}
        >
          <FormField label="Correo" required />
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
