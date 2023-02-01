import {
  Container,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Stack,
  StackDivider,
  Box,
  Text,
  Flex,
} from '@chakra-ui/react';

export const Listing = () => {
  return (
    <Container
      as={Flex}
      maxW={'4xl'}
      flexDirection={'column'}
      align={'center'}
      pt={{ base: 20 }}
    >
      <Heading alignItems={'flex-start'} size="lg">
        List View
      </Heading>
      <Card minW={'100%'} mb={'4'}>
        <CardHeader>
          <Heading size="md">Client Report</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Summary
              </Heading>
              <Text pt="2" fontSize="sm">
                View a summary of all your clients over the last month.
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
      <Card minW={'100%'} mb={'4'}>
        <CardHeader>
          <Heading size="md">Client Report</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Summary
              </Heading>
              <Text pt="2" fontSize="sm">
                View a summary of all your clients over the last month.
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
      <Card minW={'100%'} mb={'4'}>
        <CardHeader>
          <Heading size="md">Client Report</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Summary
              </Heading>
              <Text pt="2" fontSize="sm">
                View a summary of all your clients over the last month.
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
      <Card minW={'100%'} mb={'4'}>
        <CardHeader>
          <Heading size="md">Client Report</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Summary
              </Heading>
              <Text pt="2" fontSize="sm">
                View a summary of all your clients over the last month.
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Container>
  );
};
