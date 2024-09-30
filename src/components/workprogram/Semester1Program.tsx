import { type DeepPartial, Timeline } from 'flowbite-react';
import type { FlowbiteTimelinePointTheme } from 'flowbite-react/lib/esm/components/Timeline/TimelinePoint';
import { HiCalendar } from 'react-icons/hi';
import { Link } from 'react-scroll';

interface WorkProgramTimelineProps {
  title: string;
  timeframe: string;
  items: string[];

  iconColor: string | undefined;
  titleColor: string | undefined;
}

export function Semester1Timeline() {
  const data: WorkProgramTimelineProps[] = [
    {
      title: 'Start Working on New Innovations',
      timeframe: 'January to February 2024',
      items: [
        'Start designing and internal discussion regarding the new TPA and RIG Scoring Template.',
        'Start designing and discussing the new TPA and RIG Rules with Subject Development Officers and Head of the Academic Team.',
        'Post training and qualification for new 24-1 assistants.',
      ],
      iconColor: 'cyan-600',
      titleColor: 'cyan-200',
    },
    {
      title: 'TPA Game and Prepare for TPA DeskServe',
      timeframe: 'February to March 2024',
      items: [
        'Start TPA Game for 24-1.',
        'Start preparing for TPA DeskServe.',
        'New TPA and RIG Scoring Template should be done by this time.',
      ],
      iconColor: 'amber-600',
      titleColor: 'amber-200',
    },
    {
      title: 'TPA Web',
      timeframe: 'March to April 2024',
      items: [
        'Final week and evaluation for TPA game for 24-1.',
        'Start TPA Web for 24-1 with the new TPA and RIG Rules.',
      ],
      iconColor: 'green-600',
      titleColor: 'emerald-200',
    },
    {
      title: 'Final preparation for TPA DeskServe',
      timeframe: 'April to May 2024',
      items: [
        'Continue TPA Web for 24-1.',
        'TPA DeskServe preparation should be done by this time.',
      ],
      iconColor: 'blue-600',
      titleColor: 'blue-200',
    },
    {
      title: 'TPA DeskServe',
      timeframe: 'May to June 2024',
      items: [
        'Final week and evaluation for TPA Web for 24-1.',
        'Start TPA DeskServe for 24-1.',
      ],
      iconColor: 'red-600',
      titleColor: 'red-200',
    },
    {
      title: 'Continue TPA DeskServe',
      timeframe: 'June to July 2024',
      items: ['Continue TPA DeskServe for 24-1.'],
      iconColor: 'yellow-600',
      titleColor: 'yellow-100',
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
    <Timeline className={'w-auto border-l-2 border-l-purple-700'}>
      {timelineProps.map((timelineProp) => {
        return (
          <Timeline.Item className={'mb-6'}>
            <Timeline.Point
              icon={HiCalendar}
              theme={getTimelineTheme({
                iconColor: timelineProp.iconColor ?? 'cyan-600',
              })}
            />
            <Timeline.Content className={'ml-1'}>
              <Timeline.Title
                className={'text-' + timelineProp.titleColor ?? 'white'}
              >
                {timelineProp.title}
              </Timeline.Title>
              <Timeline.Time className={'font-semibold'}>
                {timelineProp.timeframe}
              </Timeline.Time>
              <Timeline.Body className={'mt-2'}>
                <ol className={'flex flex-col gap-1'}>
                  {timelineProp.items.map((item) => {
                    return <li>{item}</li>;
                  })}
                </ol>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
        );
      })}

      <Link
        to={'semester2'}
        horizontal={true}
        smooth={true}
        containerId={'semesterWorkplanContainer'}
        offset={-50}
      >
        <Timeline.Item className={'mb-6'}>
          <Timeline.Point
            icon={HiCalendar}
            theme={getTimelineTheme({
              iconColor: 'purple-600',
            })}
          />

          <Timeline.Content className={'ml-1'}>
            <Timeline.Title
              className={
                'cursor-pointer text-white duration-100 hover:text-slate-300'
              }
            >
              Next Semester
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
