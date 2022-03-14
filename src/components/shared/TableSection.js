import { Heading, VStack } from '@chakra-ui/react';
import TableData from './Table';

const TableSection = ({ tableName, data, ...rest }) => {
  return (
    <VStack {...rest} overflow="hidden" w="full" as="section">
      {tableName && <Heading size="sm">{tableName}</Heading>}
      <VStack mb={8} alignItems={'flex-start'} w="full" overflowX="auto">
        <TableData data={data} />
      </VStack>
    </VStack>
  );
};

export default TableSection;
