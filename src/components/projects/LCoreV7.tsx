/* eslint-disable import/extensions */
import lcore1Image from 'public/lcorev7/lcorev7_1.png';
import lcore2Image from 'public/lcorev7/lcorev7_2.png';
import lcore3Image from 'public/lcorev7/lcorev7_3.png';

import ProjectCard from '@/components/projects/ProjectCard';

export default function LCoreV7() {
  const title = 'LuckyCoreV7';
  const shortDescription =
    'Minecraft server core plugin that utilizes the micro-service architecture and gRPC to be as performant and scaleable as possible.';
  const year = '2023';
  const descriptions: string[] = [
    'Developed using micro-service architecture with gRPC for low-latency communication and automatic load balancing.',
    'Built on technologies from Atreus, initially designed as a simplified version of LuckyCoreV5.',
    'Ensured reliability and performance to support LuckyNetwork’s growing player base.',
    'Despite being discontinued in 2023, many elements of LuckyCoreV7 remain active in 2024, supporting hundreds of concurrent players.',
  ];
  const images = [lcore1Image, lcore2Image, lcore3Image];
  const link = 'https://www.luckynetwork.net/en';
  const github = '';
  const tags = ['Java', 'gRPC', 'MySQL'];
  const prevLink = 'lcorev5';
  const nextLink = 'less';

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
