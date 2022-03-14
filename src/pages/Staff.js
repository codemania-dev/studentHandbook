import { Heading, VStack } from '@chakra-ui/react';
import PageWrapper from '../components/PageWrapper';
import Lecturer from '../components/Staff/Lecturer';

const Staff = () => {
  return (
    <PageWrapper>
      <Heading mb={8} textAlign={'center'} size="md">
        LIST OF TEACHING STAFF IN COMPUTER SCIENCE TECHNOLOGY DEPARTMENT
      </Heading>
      <VStack w="full">
        <Lecturer />
      </VStack>
    </PageWrapper>
  );
};

export default Staff;
