import { Text, Code, VStack, Heading } from '@chakra-ui/react';
import PageWrapper from '../components/PageWrapper';

const Home = () => {
  return (
    <PageWrapper>
      <VStack justifyContent={'center'} mt={4} as="section">
        <Heading textAlign={'center'} size={'lg'} as="h1">
          COMPUTER SCIENCE TECHNOLOGY DEPARTMENT
        </Heading>
        <Heading textAlign={'center'} size="sm" as="h2">
          FEDERAL COLLEGE OF ANIMAL HEALTH AND PRODUCTION TECHNOLOGY,
        </Heading>
        <Text>P.M.B 5029, MOOR PLANTATION,</Text>
        <Text>IBADAN, OYO STATE, NIGERIA</Text>
      </VStack>
    </PageWrapper>
  );
};

export default Home;
