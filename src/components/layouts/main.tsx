import React, { useRef, useState, Children } from 'react';

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

import { Analytics, Calculator, Home, Stakeholder } from 'grommet-icons';

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

const SidebarButton = ({
  iconName,
  index,
}: {
  iconName: string;
  index: number;
}) => {
  const [over, setOver] = useState<boolean>();
  const tooltipColor = { color: 'accent-1', opacity: 0.9 };

  const ref = useRef<HTMLButtonElement>(null);
  return (
    <Box fill="horizontal">
      <Button
        ref={ref}
        onMouseOver={() => setOver(true)}
        onMouseLeave={() => setOver(false)}
        onFocus={() => setOver(false)}
        onBlur={() => setOver(false)}
        hoverIndicator={tooltipColor}
        plain
      >
        {({ hover }: { hover: boolean }) => {
          return (
            <Box pad={{ vertical: 'small' }} align="center">
              {iconsMap(hover ? 'black' : 'white')[index]}
            </Box>
          );
        }}
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
            {iconName}
          </Box>
        </Drop>
      )}
    </Box>
  );
};

const DashboardLayout: React.FunctionComponent = ({ children }) => (
  <Grommet theme={grommet} full>
    <Grid
      columns={['auto', 'flex']}
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
          {['Analytics', 'Stakeholder', 'Calculator'].map((iconName, index) => (
            <SidebarButton key={iconName} iconName={iconName} index={index} />
          ))}
        </Nav>
      </Sidebar>
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
          Bienvenido a la aplicación
        </Heading>
      </Header>
    </Grid>
  </Grommet>
);

export default DashboardLayout;
