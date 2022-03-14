import { Heading, Text, VStack } from '@chakra-ui/react';

const AboutUs = () => {
  return (
    <VStack
      w="full"
      maxW={'900px'}
      alignItems={'center'}
      margin="100px auto"
      as="section"
    >
      <Heading size={'md'}>About Us</Heading>
      <Text textAlign={'center'}>
        Computer Science Technology Department of Federal College of Animal
        Health and Production Technology, Moor Plantation, Apata, Ibadan was
        pioneered in 2012/2013 session after series of visitation by NBTE
        Resource Inspection Team.
      </Text>
      <Text textAlign={'center'}>
        Since then we have been producing self-reliant manpower in Computer
        Science Technology that are capable of applying the use of computer in
        most areas of data processing and analysis. Additionally, our graduates
        are able to solve simple hardware problems, use various programming
        languages, know the operation of Computer system and work with different
        computer packages. Most of them are found working in different
        organizations, most of them are now inforpreneurer while some are
        working with different organizations.
      </Text>
    </VStack>
  );
};

export default AboutUs;
