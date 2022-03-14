import {
  Heading,
  VStack,
  Tbody,
  Td,
  Th,
  Table,
  Thead,
  Tr,
  Box,
} from '@chakra-ui/react';

const CourseTable = ({ semester, data }) => {
  return (
    <VStack w="full" overflow={'hidden'}>
      <Heading size="sm">{semester}</Heading>
      <Box w="full" overflowX="auto">
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
      </Box>
    </VStack>
  );
};

export default CourseTable;
