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
    'Lightweight plugin designed to simplify gameplay with features like toggling flight mode and easy server management.',
    'Supports server whitelisting using player usernames and includes command aliases with in-game usage documentation.',
    'Manages other plugins’ states (e.g., loading, reloading) and uses a Minecraft-like command targeting system for ease of use.',
    'Cross-version compatibility achieved by custom mapping for different Spigot versions (especially 1.12.X to 1.13.X).',
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
