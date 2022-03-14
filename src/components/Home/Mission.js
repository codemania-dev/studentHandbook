import { Heading, VStack, ListItem, UnorderedList } from '@chakra-ui/react';

const Mission = () => {
  return (
    <VStack alignItems={'center'} margin="100px 0" as="section">
      <Heading size={'md'}>Mission</Heading>
      <UnorderedList maxW={'700px'}>
        <ListItem ml={4}>
          To produce self-reliant man power diplomats that are capable of
          applying the use of computer in most area of human endeavor.
        </ListItem>
        <ListItem ml={4}>To pursue the stated goals in our vision.</ListItem>
      </UnorderedList>
    </VStack>
  );
};

export default Mission;
