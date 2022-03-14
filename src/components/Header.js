import {
  Flex,
  Heading,
  HStack,
  IconButton,
  Text,
  VStack,
} from '@chakra-ui/react';

import { FaTimes, FaBars } from 'react-icons/fa';

import { ColorModeSwitcher } from '../utils/ColorModeSwitcher';

const Header = ({ onOpen, isOpen }) => {
  return (
    <Flex
      borderBottom={'1px solid'}
      borderColor={'gray.500'}
      p={'5px'}
      w="full"
      justifyContent="space-between"
    >
      <VStack spacing={0} alignItems={'flex-start'} w="full">
        <Heading fontSize={'1.5rem'}>IART</Heading>
        <Text>Computer science Department</Text>
      </VStack>
      <HStack>
        <ColorModeSwitcher />
        <IconButton
          d={{ base: 'block', md: 'none' }}
          size="sm"
          fontSize="lg"
          aria-label={`Switch to mobile mode`}
          variant="ghost"
          color="current"
          onClick={onOpen}
          icon={isOpen ? <FaTimes /> : <FaBars />}
        />
      </HStack>
    </Flex>
  );
};

export default Header;
