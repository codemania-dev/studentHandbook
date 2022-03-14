import { Heading, Text, VStack } from '@chakra-ui/react';

const PrincipalOfficers = () => {
  return (
    <VStack spacing={8} alignItems={'center'} margin="100px 0" as="section">
      <Heading size={'md'}>Princpal Officers</Heading>
      <VStack spacing={0}>
        <Text textAlign={'center'} fontWeight={'bold'}>
          DR. ADEKOYA OLATUNDE OWOSIBO
        </Text>
        <Text textAlign={'center'}>
          B.Agric, M.Sc, Ph.D (U.I), MBA(LAUTECH)
        </Text>
        <Text textAlign={'center'}>PROVOST</Text>
      </VStack>
      <VStack spacing={0}>
        <Text textAlign={'center'} fontWeight={'bold'}>
          REV’D BABATOPE J. DAVID
        </Text>
        <Text textAlign={'center'}>
          B.A (Hons), M.A (Comm/Lang Arts U.I), Dip.TH, AMNIM
        </Text>
        <Text textAlign={'center'}>REGISTRAR</Text>
      </VStack>
      <VStack spacing={0}>
        <Text textAlign={'center'} fontWeight={'bold'}>
          MR. ADENIYI OSADIYA
        </Text>
        <Text textAlign={'center'}>B.Sc, MBA, ACA</Text>
        <Text textAlign={'center'}>COLLEGE BURSAR</Text>
      </VStack>
      <VStack spacing={0}>
        <Text textAlign={'center'} fontWeight={'bold'}>
          MR. AYODELE O. OLAYINKA
        </Text>
        <Text textAlign={'center'}>B.Sc, MBA, CNA</Text>
        <Text textAlign={'center'}>COLLEGE AUDITOR</Text>
      </VStack>
    </VStack>
  );
};

export default PrincipalOfficers;
