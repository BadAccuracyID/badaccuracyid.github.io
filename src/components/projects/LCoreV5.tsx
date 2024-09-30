/* eslint-disable import/extensions */
import lcore1Image from 'public/lcorev5/lcore1.png';
import lcore2Image from 'public/lcorev5/lcore2.png';
import lcore3Image from 'public/lcorev5/lcore3.png';
import lcore4Image from 'public/lcorev5/lcore4.png';

import ProjectCard from '@/components/projects/ProjectCard';

export default function LCoreV5() {
  const title = 'LyraCore (LuckyCoreV5)';
  const shortDescription =
    'Minecraft server core plugin to handle player rank synchronization, cross-server messaging, staff listing, staff chats, player disguising system, and more.';
  const year = '2021';
  const descriptions: string[] = [
    'High-performance and feature rich server core plugin.',
    'Three modules: Minecraft server instance, proxy instance, and high-privileged module for rank/permission changes.',
    '2FA and robust in-game rank synchronization across server instances, ensuring instant rank updates.',
    'Player disguising feature, allowing players to change identity and rank without logging out — unique to Indonesian servers.',
  ];
  const images = [lcore1Image, lcore2Image, lcore3Image, lcore4Image];
  const link = '';
  const github = '';
  const tags = ['Java', 'Redis', 'MySQL', 'MongoDB'];
  const prevLink = 'lbw1058';
  const nextLink = 'lcorev7';

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
