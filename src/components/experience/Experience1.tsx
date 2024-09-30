/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { FlowbiteTimelinePointTheme } from 'flowbite-react';
import { List, Timeline } from 'flowbite-react';
import type { DeepPartial } from 'node_modules/flowbite-react/dist/types/types';
import { FaArrowRight, FaUser } from 'react-icons/fa';
import { HiCalendar } from 'react-icons/hi';
import { Link } from 'react-scroll';

interface WorkProgramTimelineProps {
  title: string;
  timeframe: string;
  items: string[];

  iconColor: string | undefined;
  titleColor: string | undefined;
}

export function Experience1() {
  const data: WorkProgramTimelineProps[] = [
    {
      title: 'BINUS University Teaching Assistant Development Officer',
      timeframe: 'January 2024 to Now',
      items: [
        'Responsible in the growth and development of BINUS University’s laboratory assistants by managing Test Progressing Assistant (TPA) and Research Interest Group (RIG).',
        'Successfully reformed BINUS University SLC’s Academic Department usage of Git and GitHub.',
        'Developer of NeoAcad, a web application project for officers of BINUS University SLC’s Academic Department that will be used to manage Academic operations in BINUS University SLC.',
      ],
      iconColor: 'cyan-600',
      titleColor: 'text-cyan-200',
    },
    {
      title: 'BINUS University Junior Laboratory Assistant',
      timeframe: 'February 2023 to January 2024',
      items: [
        'Successfully taught more than 360 BINUS University students about various subjects, such as iOS app development, C++, Data Structures, Java Object Oriented Programming, Database Systems, etc.',
        'Successfully improved BINUS University’s Database System subject software usage guide for Apple Silicon MacBook users.',
        'Awarded as the best performing assistant candidate.',
      ],
      iconColor: 'amber-600',
      titleColor: 'text-amber-200',
    },
    {
      title: 'LuckyNetwork SEA Cheif Technology Officer',
      timeframe: 'January 2021 to Feburary 2023',
      items: [
        'Successfully lead LuckyNetwork’s technological development and development team, making LuckyNetwork Indonesia’s most technologically advanced Minecraft server at the time.',
        'Successfully designed LuckyNetwork’s microservice architecture for its core plugin and BedWars plugin.',
        'Played a key role in the development of LuckyNetwork’s core plugin that is responsible for cross-server player data synchronization and cross-server player communication.',
      ],
      iconColor: 'green-600',
      titleColor: 'text-emerald-200',
    },
  ];

  return GetTimeline({ timelineProps: data });
}

function GetTimeline({
  timelineProps,
}: {
  timelineProps: WorkProgramTimelineProps[];
}) {
  return (
    <Timeline className="w-auto border-l-2 border-l-purple-700">
      <Link to="aboutme" smooth={true} offset={-50}>
        <Timeline.Item className="mb-8">
          <Timeline.Point
            icon={FaUser}
            theme={getTimelineTheme({
              iconColor: 'purple-600',
            })}
          />

          <Timeline.Content className="ml-1">
            <Timeline.Title className="cursor-pointer text-white duration-100 hover:text-slate-300">
              Back About Me
            </Timeline.Title>
          </Timeline.Content>
        </Timeline.Item>
      </Link>

      {timelineProps.map((timelineProp, index) => {
        return (
          <Timeline.Item key={index} className="mb-6">
            <Timeline.Point
              icon={HiCalendar}
              theme={getTimelineTheme({
                iconColor: timelineProp.iconColor ?? 'cyan-600',
              })}
            />
            <Timeline.Content className="ml-1">
              <Timeline.Title className={timelineProp.titleColor}>
                {timelineProp.title}
              </Timeline.Title>
              <Timeline.Time className="font-semibold">
                {timelineProp.timeframe}
              </Timeline.Time>
              <Timeline.Body className="mt-2">
                <List className="flex flex-col gap-1">
                  {timelineProp.items.map((item, index) => {
                    return <List.Item key={index}>{item}</List.Item>;
                  })}
                </List>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
        );
      })}

      <Link
        to="experience2"
        containerId="experienceContainer"
        offset={-50}
        horizontal
        smooth
      >
        <Timeline.Item className="mb-8">
          <Timeline.Point
            icon={FaArrowRight}
            theme={getTimelineTheme({
              iconColor: 'purple-600',
            })}
          />

          <Timeline.Content className="ml-1">
            <Timeline.Title className="cursor-pointer text-white duration-100 hover:text-slate-300">
              Next Experience (2/2)
            </Timeline.Title>
          </Timeline.Content>
        </Timeline.Item>
      </Link>
    </Timeline>
  );
}

function getTimelineTheme({
  iconColor,
}: {
  iconColor: string;
}): DeepPartial<FlowbiteTimelinePointTheme> {
  const background = 'bg-' + iconColor;
  const ring = 'ring-' + iconColor;

  return {
    horizontal: 'flex items-center',
    marker: {
      base: {
        horizontal:
          'absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 ',
        vertical:
          'absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200',
      },
      icon: {
        base: `h-5 w-5 text-white`,
        wrapper: `absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full ${background} ring-8 ${ring} shadow-2xl shadow-white-200`,
      },
    },
  };
}
