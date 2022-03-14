import {
  Box,
  CloseButton,
  Flex,
  chakra,
  Heading,
  VStack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { UrlLinks } from '../utils/NavLinks';

const Sidebar = ({ onClose }) => {
  const navigate = useNavigate();
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
        <Flex w="full" alignItems="center" justifyContent={'space-between'}>
          <Heading>Logo</Heading>
          <CloseButton size="sm" onClick={onClose} />
        </Flex>
      </Box>
      <VStack mt="10px" w="full" alignItems="flex-start">
        {UrlLinks.map((link, index) => (
          <Flex
            as="a"
            alignItems={'center'}
            px="5px"
            cursor="pointer"
            w="full"
            onClick={() => {
              navigate(link.url);
              onClose();
            }}
            borderRadius="5px"
            _hover={{
              background: 'gray.100',
              color: 'black',
            }}
            key={index}
          >
            {link.icon} <chakra.span ml={'5px'}>{link.name}</chakra.span>
          </Flex>
        ))}
      </VStack>
    </Flex>
  );
};

export default Sidebar;
