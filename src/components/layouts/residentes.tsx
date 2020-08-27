import React from 'react';
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
  DataTable,
  Meter,
  Text,
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
  iconName: string;
  index: number;
}> = ({ iconName, index }) => {
  const [over, setOver] = useState<boolean>(false);
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
            {iconName}
          </Box>
        </Drop>
      )}
    </Box>
  );
};

const amountFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

const columns = [
  {
    property: 'name',
    header: <Text>Nombbre</Text>,
    primary: true,
    footer: 'Total',
  },
  {
    property: 'ubicacion',
    header: 'Ubicacion',
  },
  {
    property: 'date',
    header: 'Date',
    render: (datum: { date: string | number | Date }) =>
      datum.date && new Date(datum.date).toLocaleDateString('en-US'),
    align: 'end',
  },
  {
    property: 'percent',
    header: 'Percent Complete',
    render: (datum: { percent: any }) => (
      <Box pad={{ vertical: 'xsmall' }}>
        <Meter
          values={[{ value: datum.percent }]}
          thickness="small"
          size="small"
        />
      </Box>
    ),
  },
  {
    property: 'paid',
    header: 'Paid',
    render: (datum: { paid: number }) =>
      amountFormatter.format(datum.paid / 100),
    align: 'end',
    aggregate: 'sum',
    footer: { aggregate: true },
  },
];

const DATA = [
  {
    name: 'Alan',
    location: '',
    date: '',
    percent: 0,
    paid: 0,
  },
  {
    name: 'Bryan',
    ubicacion: 'Mz8968-V8',
    date: '2018-06-10',
    percent: 30,
    paid: 1234,
  },
  {
    name: 'Chris',
    ubicacion: 'Mz8968-V8',
    date: '2018-06-09',
    percent: 40,
    paid: 2345,
  },
  {
    name: 'Eric',
    ubicacion: 'Mz8968-V8',
    date: '2018-06-11',
    percent: 80,
    paid: 3456,
  },
  {
    name: 'Doug',
    ubicacion: 'Mz8968-V8',
    date: '2018-06-10',
    percent: 60,
    paid: 1234,
  },
  {
    name: 'Jet',
    ubicacion: 'Mz8968-V8',
    date: '2018-06-09',
    percent: 40,
    paid: 3456,
  },
  {
    name: 'Michael',
    ubicacion: 'Mz8968-V8',
    date: '2018-06-11',
    percent: 50,
    paid: 1234,
  },
  {
    name: 'Tracy',
    ubicacion: 'Mz8968-V8',
    date: '2018-06-10',
    percent: 10,
    paid: 2345,
  },
];

const TunableDataTable = () => (
  <Grommet theme={grommet}>
    <Box align="center" pad="large">
      <DataTable
        columns={columns.map((c) => ({
          ...c,
          search: c.property === 'name' || c.property === 'ubicacion',
        }))}
        data={DATA}
        sortable
        resizeable
      />
    </Box>
  </Grommet>
);

export default TunableDataTable;
