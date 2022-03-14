import { Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import PageWrapper from '../PageWrapper';

const SynopisSection = ({ title, data }) => {
  return (
    <PageWrapper>
      <Heading mb={8} textAlign={'center'} size={'md'}>
        {title}
      </Heading>
      <VStack spacing={8} alignItems={'flex-start'} w="full">
        {data.map((item, index) => (
          <VStack spacing={0} alignItems={'flex-start'} w="full" key={index}>
            <Text fontWeight="bold">{item.course}</Text>
            <Text>{item.description}</Text>
          </VStack>
        ))}
      </VStack>
    </PageWrapper>
  );
};

export default SynopisSection;
