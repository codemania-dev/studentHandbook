import { Heading, VStack } from '@chakra-ui/react';
import PageWrapper from '../components/PageWrapper';
import TableSection from '../components/shared/TableSection';
import { administrative } from '../utils/administrativeData';
import { lecturer } from '../utils/lecturerData';
import { technology } from '../utils/technologyData';

const Staff = () => {
  return (
    <PageWrapper>
      <VStack>
        <Heading mb={4} textAlign={'center'} size="md">
          LIST OF TEACHING STAFF IN COMPUTER SCIENCE TECHNOLOGY DEPARTMENT
        </Heading>
        <VStack spacing={8} w="full">
          <TableSection data={lecturer} tableName="LIST OF LECTURERS" />
          <TableSection data={technology} tableName="LIST OF TECHNOLOGISTS" />
        </VStack>
      </VStack>
      <VStack>
        <Heading mt={20} textAlign={'center'} size="md">
          LIST OF ADMINISTRATIVE STAFF IN COMPUTER SCIENCE TECHNOLOGY DEPARTMENT
        </Heading>
        <VStack spacing={20} w="full">
          <TableSection data={administrative} />
        </VStack>
      </VStack>
    </PageWrapper>
  );
};

export default Staff;
