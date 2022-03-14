import { FaHome, FaChalkboardTeacher } from 'react-icons/fa';
import { SiCoursera } from 'react-icons/si';
import { AiFillInfoCircle } from 'react-icons/ai';
import { TiInfoLarge } from 'react-icons/ti';

export const UrlLinks = [
  {
    name: 'Home',
    url: '/',
    icon: <FaHome />,
  },
  {
    name: 'Teaching Staff',
    url: '/staff',
    icon: <FaChalkboardTeacher />,
  },
  {
    name: 'Courses',
    url: '/course',
    icon: <SiCoursera />,
  },
  {
    name: "Course's Synopsis (ND)",
    url: '/synopis-Nd',
    icon: <AiFillInfoCircle />,
  },
  {
    name: "Course's Synopsis (HND)",
    url: '/synopis-Hnd',
    icon: <TiInfoLarge />,
  },
];
