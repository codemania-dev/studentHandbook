import { Heading, VStack, Text } from '@chakra-ui/react';

const Preface = () => {
  return (
    <VStack alignItems={'center'} margin="100px 0" as="section">
      <Heading size={'md'}>Preface</Heading>
      <Text textAlign={'center'}>
        It is with great joy and gratitude to almighty God that I present to you
        this handbook of the Department of Computer Science Technology. The
        handbook was compiled to equip National Diploma and Higher National
        Diploma students with necessary information they required during the
        course of their programme. The editorial team worked round the clock to
        ensure that all required (at both level of study) information are
        captured and well explained. While I will like to applaud the team for
        the thorough work, I will also want to encourage the students to make
        good use of this handbook as their academic guide so as to have
        productive academic stay in the Department of Computer Science
        Technology and Federal College of animal Health and Production
        technology as a whole. The handbook contains information on the process
        of registration, courses and their synopses, GPA and CGPA calculation,
        grade classification and implication of academic shortfall of students
        and many more. The Department compiled these information understanding
        their important to the academic success of the students. Therefore, I
        will advice the students to take good advantage of this resource and
        explore all facilities in the Department to enhance their skills and add
        value to themselves such that at the end of the programme they are not
        only employable but also capable to create jobs.
      </Text>
      <Text textAlign={'center'}>
        I wish you all success in your academic endeavor
      </Text>
      <Text textAlign={'center'} as="i">
        Head of Department
      </Text>
    </VStack>
  );
};

export default Preface;
