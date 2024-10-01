import { Fade } from 'react-awesome-reveal';
import { Element } from 'react-scroll';

import type IExperience from '@/components/experience/experience-interface';
import TimelineComponent from '@/components/experience/timeline/timeline';

const data: IExperience[] = [
  {
    title: 'BINUS University - Teaching Assistant Development Officer',
    timeframe: 'January 2024 to Now',
    items: [
      'Responsible in the growth and development of BINUS University’s laboratory assistants by managing Test Progressing Assistant (TPA) and Research Interest Group (RIG).',
      'Successfully reformed BINUS University SLC’s Academic Department usage of Git and GitHub.',
      'Developer of NeoAcad, a web application project for officers of BINUS University SLC’s Academic Department that will be used to manage Academic operations in BINUS University SLC.',
    ],
    technologies: [
      'Excel',
      'Laravel',
      'Bun',
      'Next.js',
      'Svelte',
      'PostgreSQL',
    ],
    iconColor: 'cyan-600',
    titleColor: 'text-cyan-200',
  },
  {
    title: 'BINUS University - Junior Laboratory Assistant',
    timeframe: 'February 2023 to January 2024',
    items: [
      'Successfully taught more than 360 BINUS University students about various subjects, such as iOS app development, C++, Data Structures, Java Object Oriented Programming, Database Systems, etc.',
      'Successfully improved BINUS University’s Database System subject software usage guide for Apple Silicon MacBook users.',
      'Awarded as the best performing assistant candidate.',
    ],
    technologies: [
      'CI/CD',
      'C#',
      'MSSQL',
      'SSMS',
      'Unity',
      'HTML/JS/CSS',
      'TypeScript',
      'Python',
      'Android',
    ],
    iconColor: 'amber-600',
    titleColor: 'text-amber-200',
  },
  {
    title: 'LuckyNetwork SEA - Chief Technology Officer',
    timeframe: 'January 2021 to Feburary 2023',
    items: [
      'Successfully lead LuckyNetwork’s technological development and development team, making LuckyNetwork Indonesia’s most technologically advanced Minecraft server at the time.',
      'Successfully designed LuckyNetwork’s microservice architecture for its core plugin and BedWars plugin.',
      'Played a key role in the development of LuckyNetwork’s core plugin that is responsible for cross-server player data synchronization and cross-server player communication.',
    ],
    technologies: [
      'gRPC',
      'PL/SQL',
      'Redis',
      'Microservice Architecture',
      'Cloud Infrastructure',
    ],
    iconColor: 'green-600',
    titleColor: 'text-emerald-200',
  },
];

const data2: IExperience[] = [
  {
    title: 'LuckyNetwork SEA - Leader of Lucky Development Department',
    timeframe: 'November 2019 to January 2021',
    items: [
      'Successfully lead LuckyNetwork’s development team, consisting of plugin developers, server setup specialists, and builders.',
      'Successfully developed LuckyNetwork’s LuckyEssentialsJava, a lightweight but feature packed Minecraft plugin to enhance user experiences.',
      'Played a key role in the development of LuckyNetwork’s LuckyBedwars1058 plugin, which pushed LuckyNetwork’s player count to 1800+ concurrent players, making it the largest server in Southeast Asia.',
    ],
    technologies: ['Redis', 'MongoDB', 'MySQL', 'Gradle'],
    iconColor: 'blue-600',
    titleColor: 'text-blue-200',
  },
  {
    title: 'LuckyNetwork SEA - Administrator',
    timeframe: 'January 2019 to November 2019',
    items: [
      'Successfully enforced LuckyNetwork’s rule and maintained LuckyNetwork’s community.',
      'Successfully improved and contributed in LuckyNetwork’s KitBattle server, which gets around 60 concurrent players.',
      'Successfully transformed a skript gamemode called ThePit into a Minecraft plugin written in Java.',
    ],
    technologies: ['Cache2k', 'Git', 'GitHub', 'Kotlin', 'Maven'],
    iconColor: 'red-600',
    titleColor: 'text-red-200',
  },
  {
    title: 'LuckyNetwork SEA - Moderator',
    timeframe: 'November 2018 to January 2019',
    items: [
      'Minecraft Server Moderator that is responsible in maintaining a safe and fun environment for the players. Enforce server rules, issue warnings, mutes, kicks, and bans when necessary.',
    ],
    technologies: ['Java'],
    iconColor: 'yellow-600',
    titleColor: 'text-yellow-100',
  },
];

const ExperiencesComponent = () => {
  return (
    <Element
      id="experiences"
      name="experiences"
      className="left-pad mt-10 flex min-h-screen flex-col justify-center"
    >
      <div className="pl-5">
        <div className="text-xl text-gray-600">fun workExperience() {'{'}</div>
      </div>

      <Fade fraction={0.4} cascade>
        <div
          id="experienceContainer"
          className="scrollbar-hide mt-8 flex flex-row gap-16 overflow-scroll pl-16 pr-4 pt-4 md:gap-48 md:pr-64"
        >
          <TimelineComponent
            name="experience1"
            experiences={data}
            redirectNext="experience2"
          />
          <TimelineComponent
            name="experience2"
            experiences={data2}
            redirectPrev="experience1"
          />
        </div>
      </Fade>

      <div className="pl-5">
        <div className="text-xl text-gray-600">{'}'}</div>
      </div>
    </Element>
  );
};

export default ExperiencesComponent;
