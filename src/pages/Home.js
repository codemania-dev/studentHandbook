import {
  Text,
  HStack,
  Link,
  VStack,
  Heading,
  Flex,
  chakra,
} from '@chakra-ui/react';
import Anthem from '../components/Home/Anthem';
import Foreword from '../components/Home/Foreword';
import PageWrapper from '../components/PageWrapper';
import Preface from '../components/Home/Preface';
import PrincipalOfficers from '../components/Home/PrincipalOfficers';
import AboutUs from '../components/Home/AboutUs';
import Vision from '../components/Home/Vision';
import Mission from '../components/Home/Mission';

const Home = () => {
  return (
    <PageWrapper>
      <Flex flexDir="column" justifyContent={'space-between'} w="full" h="70vh">
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
        <VStack spacing={0}>
          <Text>STUDENTS’ HANDBOOK</Text>
          <Text>2ND EDITION</Text>
        </VStack>
        <VStack spacing={0}>
          <HStack>
            <Text>Email Address:</Text>
            <Link
              to="#"
              onClick={() =>
                (window.location.href = 'mailto:computertech@fcahptib.edu.ng')
              }
            >
              computertech@fcahptib.edu.ng
            </Link>
          </HStack>
          <HStack>
            <Text>Website:</Text>
            <chakra.a
              href="https://fcahptib.edu.ng"
              rel="noopener noreferrer"
              target={'_blank'}
              _hover={{ textDecoration: 'underline' }}
            >
              www.fcahptib.edu.ng
            </chakra.a>
          </HStack>
        </VStack>
      </Flex>
      <Foreword />
      <Preface />
      <Anthem />
      <PrincipalOfficers />
      <AboutUs />
      <Vision />
      <Mission />
    </PageWrapper>
  );
};

export default Home;
