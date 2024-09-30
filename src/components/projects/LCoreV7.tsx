/* eslint-disable import/extensions */
import lcore1Image from 'public/lcorev7/lcorev7_1.png';
import lcore2Image from 'public/lcorev7/lcorev7_2.png';
import lcore3Image from 'public/lcorev7/lcorev7_3.png';

import ProjectCard from '@/components/projects/ProjectCard';

export default function LCoreV7() {
  const title = 'LuckyCoreV7';
  const shortDescription =
    'Minecraft server core plugin that utilizes the micro-service architecture and gRPC to be as performant and scaleable as possible.';
  const descriptions: string[] = [
    'Due to LuckyNetwork’s growth, a micro-service architecture plan was created for a new server core, initially called Atreus, aimed at simplifying LuckyCoreV5 while focusing on rank synchronization.',
    'During Atreus’ development, it was determined that a new version of LuckyCoreV5 was needed to handle increased player counts and technological advancements, leading to the creation of LuckyCoreV7.',
    'The hardest challenge in designing LuckyCoreV7 was implementing the micro-service architecture, with gRPC chosen for its low latency and automatic load balancing, ensuring high reliability and performance.',
    'In 2023, LuckyCoreV7 was discontinued after my resignation, but as of 2024, many of its architecture, technologies, and services remain operational, supporting hundreds of concurrent players on LuckyNetwork.',
  ];
  const images = [lcore1Image, lcore2Image, lcore3Image];
  const link = '';
  const github = '';
  const tags = ['Java', 'gRPC', 'MySQL'];
  const prevLink = 'lcorev5';
  const nextLink = 'less';

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
