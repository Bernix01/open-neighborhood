import React, { useRef, useState, MouseEventHandler } from 'react';

import {
  Avatar,
  Button,
  Box,
  Drop,
  grommet,
  Grommet,
  Nav,
  Sidebar,
  Grid,
  Header,
  Heading,
} from 'grommet';

import {
  Analytics,
  Calculator,
  Home,
  Stakeholder,
  Edit,
  Trash,
  Add,
} from 'grommet-icons';
import { Link, useRouteMatch } from 'react-router-dom';

const src = '//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80';

// const NotificationIcon = () => (
//   <Stack anchor="top-right">
//     <Notification />
//     <Box background="accent-1" pad="xsmall" round responsive={false} />
//   </Stack>
// );

const SidebarFooter = () => (
  <Box>
    <Avatar margin="small" src={src} />
  </Box>
);

const SidebarHeader = () => (
  <Box pad="small">
    <Avatar border={{ color: 'white', size: 'small' }} round="medium">
      <Home color="white" />
    </Avatar>
  </Box>
);

const iconsMap = (color: string) => [
  <Analytics key="0" color={color} />,
  <Stakeholder key="1" color={color} />,
  <Calculator key="2" color={color} />,
];

const SidebarButtonIcon: React.FC<{ hover: boolean; index: number }> = ({
  hover,
  index,
}) => {
  return (
    <Box pad={{ vertical: 'small' }} align="center">
      {iconsMap(hover ? 'black' : 'white')[index]}
    </Box>
  );
};

const SidebarButton: React.FC<{
  title: string;
  to: string;
  index: number;
}> = ({ title, index, to }) => {
  const match = useRouteMatch({
    path: to,
    strict: true,
    exact: to === '/',
    sensitive: true,
  });
  const [over, setOver] = useState<boolean>(false);
  const tooltipColor = { color: 'accent-1', opacity: 0.9 };

  const ref = useRef<HTMLButtonElement>(null);
  return (
    <Link to={to}>
      <Box fill="horizontal">
        <Button
          ref={ref}
          onMouseOver={() => setOver(true)}
          onMouseLeave={() => setOver(false)}
          onFocus={() => setOver(false)}
          onBlur={() => setOver(false)}
          hoverIndicator={tooltipColor}
          active={match !== null}
          plain
        >
          <SidebarButtonIcon hover={over} index={index} />
        </Button>
        {ref.current && over && (
          <Drop align={{ left: 'right' }} target={ref.current} plain>
            <Box
              animation="slideRight"
              margin="xsmall"
              pad="small"
              background={tooltipColor}
              round={{ size: 'medium', corner: 'right' }}
            >
              {title}
            </Box>
          </Drop>
        )}
      </Box>
    </Link>
  );
};

const routes = [
  { icon: 'Analytics', title: 'Dashboard', to: '/' },
  { icon: 'Stakeholder', title: 'Residentes', to: '/residents' },
  { icon: 'Calculator', title: 'Alícuotas', to: '/' },
];

interface Action {
  type: 'add' | 'delete' | 'edit';
  onClick?: MouseEventHandler;
  to?: string;
}

const DashboardLayout: React.FunctionComponent<{ actions?: Action[] }> = ({
  children,
  actions,
}) => (
  <Grommet theme={grommet} full>
    <Grid
      columns={['auto', 'flex']}
      rows={['auto', 'flex']}
      areas={[
        { name: 'nav', start: [1, 0], end: [1, 0] },
        { name: 'sidebar', start: [0, 0], end: [0, 1] },
        { name: 'main', start: [1, 1], end: [1, 1] },
      ]}
      gap="small"
      pad="xsmall"
      fill="vertical"
    >
      <Sidebar
        overflow="auto"
        background="brand"
        header={<SidebarHeader />}
        footer={<SidebarFooter />}
        pad="none"
        gridArea="sidebar"
        round="medium"
      >
        <Nav>
          {routes.map((route, index) => (
            <SidebarButton
              to={route.to}
              key={route.title}
              title={route.title}
              index={index}
            />
          ))}
        </Nav>
      </Sidebar>
      <Box gridArea="main">{children}</Box>
      <Header
        align="center"
        direction="row"
        flex={false}
        justify="between"
        gap="medium"
        gridArea="nav"
      >
        <Heading level="2" size="medium" textAlign="start" color="black">
          Urbanización La alameda
        </Heading>
        <Box direction="row-responsive" justify="end" align="end">
          {actions &&
            actions.map((action) => {
              if (action.to) {
                return <Link to={action.to}>{getActionComponent(action)}</Link>;
              }
              return getActionComponent(action);
            })}
        </Box>
      </Header>
    </Grid>
  </Grommet>
);

function getActionComponent(action: Action) {
  switch (action.type) {
    case 'edit':
      return <Button key={action.type} label="editar" icon={<Edit />} plain />;
    case 'delete':
      return <Button label="borrar" key={action.type} icon={<Trash />} plain />;
    case 'add':
      return (
        <Button
          label="agregar"
          onClick={action.onClick}
          key={action.type}
          icon={<Add />}
          plain
        />
      );
    default:
      return <span>unsuported action</span>;
  }
}

export default DashboardLayout;
