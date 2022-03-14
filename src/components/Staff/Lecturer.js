import {
  Box,
  Code,
  Heading,
  Table,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react';
import { lecturer } from '../../utils/lecturerData';

const Lecturer = () => {
  return (
    <VStack overflow="hidden" w="full" as="section">
      <Heading size="sm">LIST OF LECTURERS</Heading>
      <VStack pb={8} alignItems={'flex-start'} w="full" overflowX="auto">
        <Table w="full" size="sm">
          <Thead>
            <Tr>
              {lecturer[0].header.map((header, index) => (
                <Th key={index}>{header}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {lecturer[0].rows.map((row, index) => (
              <Tr key={index}>
                <Td>{row.SN}</Td>
                <Td>{row.Name}</Td>
                <Td minW={'200px'} w="300px">
                  <VStack alignItems={'flex-start'} spacing={0}>
                    {row.Qualification.map((qualification, index) => (
                      <Text key={index}>{qualification}</Text>
                    ))}
                  </VStack>
                </Td>
                <Td minW={'100px'}>{row.Rank}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Text>KEY : * = STUDY LEAVE </Text>
      </VStack>
    </VStack>
  );
};

export default Lecturer;
