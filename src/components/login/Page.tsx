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
import { Lock, LinkNext } from 'grommet-icons';
import { useMutation } from 'graphql-hooks';
import { useForm } from 'react-hook-form';
import { login } from 'src/Auth';
import { print } from 'graphql';
import { loader } from 'graphql.macro';
import {
  LoginMutationVariables,
  ObtainJsonWebToken,
} from 'src/generated/graphql';

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

const LOGIN_QUERY = loader('./login.graphql');

type FormData = {
  user: string;
  password: string;
};

type LoginResponse = {
  token: string;
};

type LoginError = {
  message: string;
};

type LoginVariables = {
  user: string;
  password: string;
};

export default () => {
  const { register, handleSubmit } = useForm<FormData>();

  const [
    doLogin,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation<ObtainJsonWebToken, LoginMutationVariables, LoginError>(
    print(LOGIN_QUERY)
  );

  const onSubmit = handleSubmit(async ({ user, password }) => {
    const { data, error } = await doLogin({ variables: { user, password } });
    if (error) {
      // TODO: handle?
    } else {
      const { token } = data;

      login({
        refreshToken: token,
        accessToken: token,
      });
    }
  });

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
        <Form onSubmit={onSubmit}>
          <FormField name="user" label="Correo" required>
            <TextInput name="user" ref={register} />
          </FormField>
          <FormField
            name="password"
            maxLength={50}
            minLength={4}
            label="Contraseña"
            required
          >
            <TextInput
              name="password"
              icon={<Lock />}
              ref={register}
              placeholder="****"
              type="password"
            />
          </FormField>
          {mutationError && mutationError.graphQLErrors ? (
            <p>{mutationError.graphQLErrors[0].message}</p>
          ) : (
            <></>
          )}
          <Button
            label="Ingresar"
            disabled={mutationLoading}
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
