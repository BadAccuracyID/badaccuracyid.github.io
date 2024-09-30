/* eslint-disable import/extensions */
import dgenImage from 'public/lbw/diamond_gen.png';
import lcControllerImage from 'public/lbw/lc_controller.png';

import ProjectCard from '@/components/projects/ProjectCard';

export default function LBW1058() {
  const title = 'LuckyBedWars1058';
  const shortDescription =
    "Advanced BedWars plugin for LuckyNetwork's cloud based infrastructure and high player count.";
  const descriptions: string[] = [
    'High-performance BedWars plugin.',
    'Supports up to 200 players per server instance with under 4GB RAM and a single-core processor.',
    'Features multiple game and lobby server instance support.',
    'Optional backend service for automatic cloud server scaling based on player count.',
  ];
  const images = [lcControllerImage, dgenImage];
  const link = '';
  const github = '';
  const tags = ['Java', 'Redis', 'MySQL', 'JavaFX'];
  const prevLink = 'lbw1058';
  const nextLink = 'lcorev5';

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
