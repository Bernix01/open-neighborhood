import React from 'react';
import {
  Heading,
  Form,
  FormField,
  TextInput,
  Button,
  DateInput,
} from 'grommet';
import { Lock, LinkNext } from 'grommet-icons';
import { useMutation } from 'graphql-hooks';
import { useForm } from 'react-hook-form';
import DashboardLayout from './layouts/main';

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
    <DashboardLayout>
      <Heading level="3">Registro Residente</Heading>
      <Form>
        <FormField name="id_card" label="Cédula" required>
          <TextInput name="id_card" ref={register} />
        </FormField>
        <FormField name="name" label="Nombre" required>
          <TextInput name="name" ref={register} />
        </FormField>
        <FormField name="birth" label="Fecha de nacimiento" required>
          <DateInput format="mm/dd/yyyy" value={new Date().toISOString()} />
        </FormField>
        <FormField name="user" label="Correo" required>
          <TextInput name="user" type="email" ref={register} />
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
    </DashboardLayout>
  );
};
