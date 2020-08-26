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
  DateInput,
} from 'grommet';
import { Lock, LinkNext } from 'grommet-icons';
import { useMutation } from 'graphql-hooks';
import { useForm } from 'react-hook-form';
import { login } from 'src/Auth';

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

type FormData = {
  user: string;
  password: string;
};

type RegisterError = {
  message: string;
};

type RegisterVariables = {
  id_card: string;
  name: string;
  brith: string;
  user: string;
  password: string;
};

export default () => {
  const { register } = useForm<FormData>();

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
        <Heading level="3" textAlign="center">
          Registro Residente
        </Heading>
        <Form>
          <FormField name="id_card" label="Card" required>
            <TextInput name="id_card" ref={register} />
          </FormField>
          <FormField name="name" label="Name" required>
            <TextInput name="name" ref={register} />
          </FormField>
          <FormField name="birth" label="Birth" required>
            <DateInput format="mm/dd/yyyy" value={new Date().toISOString()} />
          </FormField>
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

          <Button
            label="Registrar"
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
