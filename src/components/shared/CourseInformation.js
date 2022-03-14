import { Flex, Heading, VStack } from '@chakra-ui/react';
import CourseTable from './CourseTable';

const CourseInformation = ({ heading, courseData }) => {
  return (
    <Flex w="full" flexDirection="column">
      <Heading mb="8" textAlign={'center'} size="md">
        {heading}
      </Heading>
      <VStack pb={4} spacing={8}>
        {courseData.map((item, index) => (
          <CourseTable key={index} semester={item.semester} data={item.data} />
        ))}
      </VStack>
    </Flex>
  );
};

export default CourseInformation;
