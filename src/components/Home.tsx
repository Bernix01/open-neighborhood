import React from 'react';
import { Heading, Anchor, Box, Grommet, Header, Nav, Menu } from 'grommet';

function Home() {
  return (
    <>
      <Grommet>
        <Header background="dark-1" pad="medium">
          <Box direction="row" align="center" gap="small"></Box>
          <Nav direction="row">
            <Anchor href="#" label="Perfil" key="Perfil" />
            <Menu
              label="Residentes"
              items={[
                { label: 'Registrar', onClick: () => {} },
                { label: 'Consultar ', onClick: () => {} },
              ]}
            />
            <Menu
              label="Personal de Seguridad"
              items={[
                { label: 'Registrar', onClick: () => {} },
                { label: 'Consultar ', onClick: () => {} },
              ]}
            />
            <Menu
              label="Rubros"
              items={[
                { label: 'Crear', onClick: () => {} },
                { label: 'Consultar ', onClick: () => {} },
              ]}
            />

            <Anchor href="#" label="Reportes" key="Reportes" />
          </Nav>
        </Header>
        <Heading alignSelf="center" textAlign="center">
          Bienvenido a la Aplicación
        </Heading>
      </Grommet>
    </>
  );
}

export default Home;
