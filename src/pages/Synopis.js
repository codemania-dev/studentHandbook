import SynopisSection from '../components/shared/SynopisSection';
import { SynopisNd } from '../utils/SynopisData';

const Synopis = () => {
  return (
    <SynopisSection
      title="SYNOPSIS OF COURSES IN THE  NATIONAL DIPLOMA (ND) COMPUTER SCIENCE TECHNOLOGY DEPARTMENT"
      data={SynopisNd}
    />
  );
};

export default Synopis;
