/* eslint-disable import/extensions */
import image1 from 'public/efio/2.png';
import image2 from 'public/efio/4.png';
import image3 from 'public/efio/5.png';
import image4 from 'public/efio/7.png';

import ProjectCard from '@/components/projects/ProjectCard';

export default function EFIO() {
  const title = 'EFIO';
  const shortDescription =
    'Android application used by BINUS University’s SLC laboratory assistants to check laboratory room transactions, such as teaching schedule and borrowing schedule, and to log room borrowing.';
  const year = '2023';
  const descriptions: string[] = [
    'A room transaction checking system for SLC’s 23-1 generation project.',
    'Two modes: user mode for generating QR codes for room requests and admin mode for scanning and approving/declining requests.',
    'Handles API data from SLC’s API with REST.',
    'Uses biometric authentication for enhanced security and convinience.',
    'Employs efficient in-memory caching for high performance.',
  ];
  const images = [image1, image2, image3, image4];
  const link =
    'https://play.google.com/store/apps/details?id=edu.bluejack23_1.efio';
  const github = '';
  const tags = ['Kotlin', 'Firebase', 'Android 33', 'REST'];
  const prevLink = 'less';
  const nextLink = 'efio';

  return (
    <ProjectCard
      title={title}
      shortDescription={shortDescription}
      year={year}
      descriptions={descriptions}
      images={images}
      link={link}
      github={github}
      tags={tags}
      prevLink={prevLink}
      nextLink={nextLink}
    />
  );
}
