import { Flex, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Flex
      borderRight={'1px solid'}
      borderColor={'gray.500'}
      maxW="250px"
      w="full"
      h="full"
      overflowY="auto"
      as="aside"
    >
      <Heading>Logo</Heading>
    </Flex>
  );
};

export default Sidebar;
