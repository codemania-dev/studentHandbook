import {
  Heading,
  VStack,
  Tbody,
  Td,
  Text,
  Th,
  Table,
  Thead,
  Tr,
} from '@chakra-ui/react';

const CourseTable = ({ semester, data }) => {
  return (
    <VStack>
      <Heading size="sm">{semester}</Heading>
      <Table w="full" size="sm">
        <Thead>
          <Tr>
            {data[0].header.map((header, index) => (
              <Th key={index}>{header}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data[0].rows.map((row, index) => (
            <Tr key={index}>
              <Td>{row.SN}</Td>
              <Td>{row['Course Code']}</Td>
              <Td minW={'200px'} w="300px">
                {row['Course Title']}
              </Td>
              <Td minW={'20px'}>{row.L}</Td>
              <Td minW={'20px'}>{row.P}</Td>
              <Td minW={'20px'}>{row.CU}</Td>
              <Td minW={'20px'}>{row.CH}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </VStack>
  );
};

export default CourseTable;
