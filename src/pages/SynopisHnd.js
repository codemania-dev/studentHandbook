import SynopisSection from '../components/shared/SynopisSection';
import { SynopisHnd as data } from '../utils/SynopisData';

const SynopisHnd = () => {
  return (
    <SynopisSection
      title="SYNOPSIS OF COURSES IN THE HIGHER NATIONAL DIPLOMA (HND) COMPUTER SCIENCE TECHNOLOGY DEPARTMENT"
      data={data}
    />
  );
};

export default SynopisHnd;
