import { VStack, ListItem, OrderedList, Heading, Text } from '@chakra-ui/react';

const Anthem = () => {
  return (
    <VStack alignItems={'center'} margin="100px 0" as="section">
      <Heading size={'md'}>College Anthem</Heading>
      <OrderedList>
        <ListItem ml={4}>
          <Text textAlign={'center'}>
            Federal College of Animal Health <br /> And Production Technology
            <br />
            Builders of great potentials
            <br /> Through Agriculture and modern technology
          </Text>
          <Text mt="8" textAlign={'center'}>
            All hail our great alma matter <br /> The citadel of knowledge and
            creativity
            <br />
            Great Moorites uphold your vision
            <br /> Animal care for productivity
          </Text>
        </ListItem>
        <ListItem mt="8" ml={4}>
          <Text textAlign={'center'}>
            Federal College of Animal Health <br /> And Production Technology
            <br />
            Caring for man’s agricultural needs
            <br /> Through extension service to community
          </Text>
        </ListItem>
      </OrderedList>
    </VStack>
  );
};

export default Anthem;
