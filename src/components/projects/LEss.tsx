/* eslint-disable import/extensions */
import less1Image from 'public/less/less1.png';
import less2Image from 'public/less/less2.png';
import less3Image from 'public/less/less3.png';

import ProjectCard from '@/components/projects/ProjectCard';

export default function LEss() {
  const title = 'LuckyEssentialsJava';
  const shortDescription =
    'Lightweight yet feature-rich plugin designed to improve the gameplay experience and moderation experience for Minecraft servers.';
  const descriptions: string[] = [
    'LuckyEssentialsJava enhances gameplay by simplifying tasks like toggling flight mode and includes essential server management features like easy whitelisting using player usernames instead of UUIDs.',
    'Designed to be lightweight and user-friendly, it offers numerous command aliases and in-game documentation for ease of use.',
    'It can manage other plugins’ states, including loading, reloading, enabling, disabling, and listing commands and descriptions.',
    'Features a native Minecraft-like command target selection system to make the plugin intuitive and easy to learn.',
    'The biggest challenge was ensuring cross-version compatibility, especially between Spigot versions 1.12.X and 1.13.X, which was solved by creating a custom map that adjusts automatically to different versions.',
  ];
  const images = [less1Image, less2Image, less3Image];
  const link =
    'https://github.com/Lucky-Development-Department/LuckyEssentialsJava/files/15270536/PRD.-.LuckyEssentialsJava.pdf';
  const github =
    'https://github.com/Lucky-Development-Department/LuckyEssentialsJava';
  const tags = ['Java'];
  const prevLink = 'lcorev7';
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
