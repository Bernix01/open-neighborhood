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
  name: string;
  brith: string;
  telefono: string;
  address: string;
  user: string;
  password: string;
};

const RegisterStaff: React.FC = () => {
  const { register } = useForm<FormData>();

  return (
    <DashboardLayout>
      <Heading level="3" textAlign="center">
        Registro Staff
      </Heading>
      <Form>
        <FormField
          name="birth"
          label="Birth"
          placeholder="Fecha de Nacimiento"
          required
        >
          <DateInput format="mm/dd/yyyy" value={new Date().toISOString()} />
        </FormField>
        <FormField
          name="telefono"
          label="Telefono"
          placeholder="Telefono"
          required
        >
          <TextInput name="telefono" pattern="[0-9]{10}" ref={register} />
        </FormField>
        <FormField
          name="id_card"
          label="Address"
          placeholder="Direccion"
          required
        >
          <TextInput name="address" ref={register} />
        </FormField>
        <FormField name="name" label="Name" placeholder="Nombre" required>
          <TextInput name="name" ref={register} />
        </FormField>
        <FormField name="user" label="Correo" placeholder="Correo" required>
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

export default RegisterStaff;
