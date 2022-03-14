import { Heading, Text, VStack } from '@chakra-ui/react';

const Foreword = () => {
  return (
    <VStack alignItems={'center'} margin="100px 0" as="section">
      <Heading size={'md'}>Foreword</Heading>
      <Text textAlign="center">
        The Federal College of Animal Health and Production Technology, Moor
        Plantation, Ibadan offers full and part-time courses leading to National
        Diplomas and Higher National Diploma qualifications through the kind of
        trainings we give our students, our graduates are expected to be
        skillful and competent enough to be job creators with little or no
        assistance.
      </Text>
      <Text textAlign="center">
        Our programmes are structured to meet national and international
        standard of middle level man power development.
      </Text>
      <Text textAlign="center">
        This handbook is all encompassing as it provides information that will
        guide the students throughout their stay in the college towards
        successful academic achievement. Also it provides entry requirements and
        other information concerning the Department.
      </Text>
      <Text textAlign="center">
        Therefore, students should note that they are to adhere strictly and
        comply with the College regulations and departmental rules as approved
        by the College management.
      </Text>
      <Text textAlign="center">
        I look forward to attending your graduation ceremony soonest.
      </Text>
      <Text textAlign="center">Thank you.</Text>
      <VStack alignItems={'flex-start'} spacing={0}>
        <Text fontWeight={'bold'}>DR. A. O. Owosibo</Text>
        <Text as="i">(B.Agric, M.Sc, Ph.D)</Text>
        <Text>College Provost</Text>
      </VStack>
    </VStack>
  );
};

export default Foreword;
