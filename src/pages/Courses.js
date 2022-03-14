import { Heading, VStack } from '@chakra-ui/react';
import PageWrapper from '../components/PageWrapper';
import CourseTable from '../components/shared/CourseTable';
import {
  courseYear11,
  courseYear12,
  courseYear21,
  courseYear22,
} from '../utils/CourseData';

const Courses = () => {
  return (
    <PageWrapper>
      <Heading mb="8" textAlign={'center'} size="md">
        NATIONAL DIPLOMA COMPUTER SCIENCE
      </Heading>
      <VStack pb={4} spacing={8}>
        <CourseTable semester={'1ST SEMESTER YEAR 1'} data={courseYear11} />
        <CourseTable semester={'2ND SEMESTER YEAR 1'} data={courseYear12} />
        <CourseTable semester={'1ST SEMESTER YEAR 2'} data={courseYear21} />
        <CourseTable semester={'2ND SEMESTER YEAR 2'} data={courseYear22} />
      </VStack>
    </PageWrapper>
  );
};

export default Courses;
