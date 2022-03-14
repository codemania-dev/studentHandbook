import {
  Tbody,
  Td,
  Text,
  Th,
  Table,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react';

const TableData = ({ data }) => {
  console.log(data);
  return (
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
  );
};

export default TableData;
