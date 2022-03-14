import { Box, Flex, Heading, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { UrlLinks } from '../utils/NavLinks';

const Sidebar = ({ onClose }) => {
  return (
    <Flex
      borderRight={'1px solid'}
      borderColor={'gray.500'}
      maxW={{ sm: 'full', md: '250px' }}
      w="full"
      h="full"
      overflowY="auto"
      as="aside"
      flexDirection={'column'}
      alignItems="flex-start"
      p="5px"
    >
      <Box h="54px" w="full" borderBottom="1px solid" borderColor="gray.500">
        <Heading>Logo</Heading>
      </Box>
      <VStack mt="10px" w="full" alignItems="flex-start">
        {UrlLinks.map((link, index) => (
          <Link w="full" onClick={onClose} to={link.url} key={index}>
            {link.name}
          </Link>
        ))}
      </VStack>
    </Flex>
  );
};

export default Sidebar;
