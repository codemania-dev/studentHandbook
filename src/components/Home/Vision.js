import { Heading, VStack, ListItem, UnorderedList } from '@chakra-ui/react';

const Vision = () => {
  return (
    <VStack alignItems={'center'} margin="100px 0" as="section">
      <Heading size={'md'}>Vision</Heading>
      <UnorderedList maxW={'700px'}>
        <ListItem ml={4}>
          To contribute to the development of IT firm in Nigeria.
        </ListItem>
        <ListItem ml={4}>
          To be the foremost IT trainers among equals in the training of skilled
          personnel in computer science technology.
        </ListItem>
        <ListItem ml={4}>
          To be a world class training institution in the area of computer
          science technology.
        </ListItem>
        <ListItem ml={4}>
          To produce diplomates at National Diploma (ND) and Higher National
          Diploma (HND) levels that are morally sound, professionally skillful
          and enterprising for sustainability in Nigeria.
        </ListItem>
      </UnorderedList>
    </VStack>
  );
};

export default Vision;
