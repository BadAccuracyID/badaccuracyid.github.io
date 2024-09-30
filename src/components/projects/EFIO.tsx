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
  const descriptions: string[] = [
    'EFIO was developed as a TPA project for SLC’s 23-1 generation to simplify room transaction checking and logging.',
    'It has two modes: user mode for laboratory assistants to view room transactions and generate QR codes for borrowing requests, and admin mode for administrators to scan these codes and manage requests.',
    'EFIO retrieves data from SLC’s messy API using REST, with challenges around inconsistent data and limited documentation.',
    'To ensure security, EFIO uses biometric authentication when supported, and it is designed for high performance by caching necessary data for efficient and lightweight data loading.',
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
