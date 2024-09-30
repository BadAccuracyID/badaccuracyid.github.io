/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type DeepPartial, Timeline } from 'flowbite-react';
import type { FlowbiteTimelinePointTheme } from 'flowbite-react/lib/esm/components/Timeline/TimelinePoint';
import { FaArrowLeft, FaCode } from 'react-icons/fa';
import { HiCalendar } from 'react-icons/hi';
import { Link } from 'react-scroll';

interface WorkProgramTimelineProps {
  title: string;
  timeframe: string;
  items: string[];

  iconColor: string | undefined;
  titleColor: string | undefined;
}

export function Experience2() {
  const data: WorkProgramTimelineProps[] = [
    {
      title: 'LuckyNetwork SEA - Leader of Lucky Development Department',
      timeframe: 'November 2019 to January 2021',
      items: [
        '- Successfully lead LuckyNetwork’s development team, consisting of plugin developers, server setup specialists, and builders.',
        '- Successfully developed LuckyNetwork’s LuckyEssentialsJava, a lightweight but feature packed Minecraft plugin to enhance user experiences.',
        '- Played a key role in the development of LuckyNetwork’s LuckyBedwars1058 plugin, which pushed LuckyNetwork’s player count to 1800+ concurrent players, making it the largest server in Southeast Asia.',
      ],
      iconColor: 'blue-600',
      titleColor: 'text-blue-200',
    },
    {
      title: 'LuckyNetwork SEA - Administrator',
      timeframe: 'January 2019 to November 2019',
      items: [
        '- Successfully enforced LuckyNetwork’s rule and maintained LuckyNetwork’s community.',
        '- Successfully improved and contributed in LuckyNetwork’s KitBattle server, which gets around 60 concurrent players.',
        '- Successfully transformed a skript gamemode called ThePit into a Minecraft plugin written in Java.',
      ],
      iconColor: 'red-600',
      titleColor: 'text-red-200',
    },
    {
      title: 'LuckyNetwork SEA - Moderator',
      timeframe: 'November 2018 to January 2019',
      items: [
        '- Minecraft Server Moderator that is responsible in maintaining a safe and fun environment for the players. Enforce server rules, issue warnings, mutes, kicks, and bans when necessary.',
      ],
      iconColor: 'yellow-600',
      titleColor: 'text-yellow-100',
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
      <Link
        to="experience1"
        containerId="experienceContainer"
        offset={-50}
        horizontal
        smooth
      >
        <Timeline.Item className="mb-8">
          <Timeline.Point
            icon={FaArrowLeft}
            theme={getTimelineTheme({
              iconColor: 'purple-600',
            })}
          />

          <Timeline.Content className="ml-1">
            <Timeline.Title className="cursor-pointer text-white duration-100 hover:text-slate-300">
              Back - Experience (1/2)
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
                <ol className="flex flex-col gap-1">
                  {timelineProp.items.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </ol>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
        );
      })}

      <Link to="projects" horizontal={false} smooth={true} offset={-50}>
        <Timeline.Item className="mb-8">
          <Timeline.Point
            icon={FaCode}
            theme={getTimelineTheme({
              iconColor: 'purple-600',
            })}
          />

          <Timeline.Content className="ml-1">
            <Timeline.Title className="cursor-pointer text-white duration-100 hover:text-slate-300">
              Next - Projects
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
