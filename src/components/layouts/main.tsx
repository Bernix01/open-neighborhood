import React from 'react';
import {
  Grommet,
  Grid,
  Box,
  Button,
  Nav,
  Header,
  Heading,
  ThemeType,
} from 'grommet';
import { Ad, Apps, Escalator, User } from 'grommet-icons';

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
const DashoardLayout: React.FunctionComponent<{ title: string }> = ({
  title,
  children,
}) => (
  <Grommet full theme={theme}>
    <Grid
      columns={['xxsmall', 'flex']}
      rows={['xxsmall', 'flex']}
      areas={[
        { name: 'nav', start: [1, 0], end: [1, 0] },
        { name: 'sidebar', start: [0, 0], end: [0, 1] },
        { name: 'main', start: [1, 1], end: [1, 1] },
      ]}
      gap="xsmall"
      pad="small"
      fill="vertical"
    >
      <Box
        align="start"
        justify="between"
        background={{ color: 'brand' }}
        gridArea="sidebar"
      >
        <Box align="center" justify="center" fill="vertical">
          <Button icon={<Ad />} />
          <Nav align="center" flex={false} direction="column" gap="xxsmall">
            <Button icon={<Apps />} />
            <Button icon={<Escalator />} />
          </Nav>
        </Box>
        <Box align="center" justify="center">
          <Button icon={<User />} />
        </Box>
      </Box>
      <Box align="center" justify="center" gridArea="main">
        {children}
      </Box>
      <Header
        align="center"
        direction="row"
        flex={false}
        justify="between"
        gap="medium"
        gridArea="nav"
      >
        <Heading level="1" size="medium" textAlign="start" color="black">
          {title}
        </Heading>
      </Header>
    </Grid>
  </Grommet>
);

export default DashoardLayout;
