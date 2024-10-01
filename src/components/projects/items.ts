/* eslint-disable import/extensions */
import efio1 from 'public/efio/2.png';
import efio2 from 'public/efio/4.png';
import efio3 from 'public/efio/5.png';
import efio4 from 'public/efio/7.png';
import dgenImage from 'public/lbw/diamond_gen.png';
import lcControllerImage from 'public/lbw/lc_controller.png';
import lcore1Image from 'public/lcorev5/lcore1.png';
import lcore2Image from 'public/lcorev5/lcore2.png';
import lcore3Image from 'public/lcorev5/lcore3.png';
import lcore4Image from 'public/lcorev5/lcore4.png';
import lcoreV71Image from 'public/lcorev7/lcorev7_1.png';
import lcoreV72Image from 'public/lcorev7/lcorev7_2.png';
import lcoreV73Image from 'public/lcorev7/lcorev7_3.png';
import less1Image from 'public/less/less1.png';
import less2Image from 'public/less/less2.png';
import less3Image from 'public/less/less3.png';

import type { IProject } from '@/components/projects/EDisplayMode';

const projects: IProject[] = [
  {
    id: 'lbw1058',
    title: 'LuckyBedWars1058',
    shortDescription:
      "Advanced BedWars plugin for LuckyNetwork's cloud based infrastructure and high player count.",
    longDescription: [
      'High-performance BedWars plugin.',
      'Supports up to 200 players per server instance with under 4GB RAM and a single-core processor.',
      'Features multiple game and lobby server instance support.',
      'Optional backend service for automatic cloud server scaling based on player count.',
    ],
    year: '2022',
    company: 'LuckyNetwork',
    images: [dgenImage, lcControllerImage],
    link: 'https://www.luckynetwork.net/en',
    github: '',
    tags: ['Java', 'Redis', 'MySQL', 'JavaFX'],
  },
  {
    id: 'lcorev5',
    title: 'LyraCore (LuckyCoreV5)',
    shortDescription:
      'Minecraft server core plugin to handle player rank synchronization, cross-server messaging, staff listing, staff chats, player disguising system, and more.',
    longDescription: [
      'High-performance and feature rich server core plugin.',
      'Three modules: Minecraft server instance, proxy instance, and high-privileged module for rank/permission changes.',
      '2FA and robust in-game rank synchronization across server instances, ensuring instant rank updates.',
      'Player disguising feature, allowing players to change identity and rank without logging out — unique to Indonesian servers.',
    ],
    year: '2021',
    company: 'LuckyNetwork',
    images: [lcore1Image, lcore2Image, lcore3Image, lcore4Image],
    link: 'https://www.luckynetwork.net/en',
    github: '',
    tags: ['Java', 'Redis', 'MySQL', 'MongoDB'],
  },
  {
    id: 'less',
    title: 'LuckyEssentialsJava',
    shortDescription:
      'Lightweight yet feature-rich plugin designed to improve the gameplay experience and moderation experience for Minecraft servers.',
    longDescription: [
      'Lightweight plugin designed to simplify gameplay with features like toggling flight mode and easy server management.',
      'Supports server whitelisting using player usernames and includes command aliases with in-game usage documentation.',
      'Manages other plugins’ states (e.g., loading, reloading) and uses a Minecraft-like command targeting system for ease of use.',
      'Cross-version compatibility achieved by custom mapping for different Spigot versions (especially 1.12.X to 1.13.X).',
    ],
    year: '2023',
    company: 'LuckyNetwork',
    images: [less1Image, less2Image, less3Image],
    link: 'https://github.com/Lucky-Development-Department/LuckyEssentialsJava/files/15270536/PRD.-.LuckyEssentialsJava.pdf',
    github:
      'https://github.com/Lucky-Development-Department/LuckyEssentialsJava',
    tags: ['Java'],
  },
  {
    id: 'lcorev7',
    title: 'LuckyCoreV7',
    shortDescription:
      'Minecraft server core plugin that utilizes the micro-service architecture and gRPC to be as performant and scaleable as possible.',
    longDescription: [
      'Developed using micro-service architecture with gRPC for low-latency communication and automatic load balancing.',
      'Built on technologies from Atreus, initially designed as a simplified version of LuckyCoreV5.',
      'Ensured reliability and performance to support LuckyNetwork’s growing player base.',
      'Despite being discontinued in 2023, many elements of LuckyCoreV7 remain active in 2024, supporting hundreds of concurrent players.',
    ],
    year: '2023',
    company: 'LuckyNetwork',
    images: [lcoreV73Image, lcoreV71Image, lcoreV72Image],
    link: 'https://www.luckynetwork.net/en',
    github: '',
    tags: ['Java', 'gRPC', 'MySQL'],
  },
  {
    id: 'efio',
    title: 'EFIO',
    shortDescription:
      'Android application for BINUS University’s SLC laboratory assistants to check laboratory room transactions and to log room borrowing.',
    longDescription: [
      'Developed using micro-service architecture with gRPC for low-latency communication and automatic load balancing.',
      'Built on technologies from Atreus, initially designed as a simplified version of LuckyCoreV5.',
      'Ensured reliability and performance to support LuckyNetwork’s growing player base.',
      'Despite being discontinued in 2023, many elements of LuckyCoreV7 remain active in 2024, supporting hundreds of concurrent players.',
    ],
    year: '2023',
    company: 'BINUS University',
    images: [efio1, efio2, efio3, efio4],
    link: 'https://play.google.com/store/apps/details?id=edu.bluejack23_1.efio',
    github: '',
    tags: ['Kotlin', 'Firebase', 'Android 33', 'REST'],
  },
];

export default projects;
