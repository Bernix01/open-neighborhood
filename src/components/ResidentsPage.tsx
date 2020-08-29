import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Heading,
  Box,
} from 'grommet';
import { ShareOption, Star } from 'grommet-icons';
import DashboardLayout from './layouts/main';

const ResidentPage: React.FC = () => {
  const match = useRouteMatch();
  return (
    <DashboardLayout actions={[{ type: 'add', to: `${match.path}/register` }]}>
      <Box direction="row-responsive" gap="small">
        <Card basis="1/4">
          <CardHeader pad="small">
            <Heading level="3" margin="none">
              Juan Piguabe
            </Heading>
          </CardHeader>
          <CardBody pad="medium">Body</CardBody>
          <CardFooter pad={{ horizontal: 'small' }} background="light-2">
            <Button icon={<Star color="red" />} hoverIndicator />
            <Button icon={<ShareOption color="plain" />} hoverIndicator />
          </CardFooter>
        </Card>
        <Card basis="1/4">
          <CardHeader pad="small">
            <Heading level="3">Juan Piguabe</Heading>
          </CardHeader>
          <CardBody pad="medium">Body</CardBody>
          <CardFooter pad={{ horizontal: 'small' }} background="light-2">
            <Button icon={<Star color="light-5" />} hoverIndicator />
            <Button icon={<ShareOption color="plain" />} hoverIndicator />
          </CardFooter>
        </Card>
      </Box>
    </DashboardLayout>
  );
};

export default ResidentPage;
