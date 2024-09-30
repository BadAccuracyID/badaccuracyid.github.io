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

export function Semester2Timeline() {
  const data: WorkProgramTimelineProps[] = [
    {
      title: 'Welcoming New 24-2 Assistants',
      timeframe: 'July to August 2024',
      items: [
        'Final week and evaluation for TPA DeskServe for 24-1.',
        'Post training and qualification for new 24-2 assistants.',
        'Post training and qualification for 24-1 assistants.',
      ],
      iconColor: 'cyan-600',
      titleColor: 'cyan-200',
    },
    {
      title: 'TPA Game and TPA Mobile',
      timeframe: 'August to September 2024',
      items: [
        'Post training and qualification for new 24-2 assistants.',
        'Start TPA Game for 24-2.',
        'Start TPA Mobile for 24-1.',
      ],
      iconColor: 'amber-600',
      titleColor: 'amber-200',
    },
    {
      title: 'TPA Game and TPA Mobile',
      timeframe: 'September to October 2024',
      items: ['Continue TPA Game for 24-2.', 'Continue TPA Mobile for 24-1.'],
      iconColor: 'green-600',
      titleColor: 'emerald-200',
    },
    {
      title: 'Final week and evaluation for TPA Game and TPA Mobile',
      timeframe: 'October to November 2024',
      items: [
        'Final week and evaluation for TPA Game for 24-2.',
        'Final week and evaluation for TPA Mobile for 24-1.',
      ],
      iconColor: 'blue-600',
      titleColor: 'blue-200',
    },
    {
      title: 'Start TPA Network and TPA Web',
      timeframe: 'November to December 2024',
      items: ['Start TPA Network for 24-1.', 'Start TPA Web for 24-2.'],
      iconColor: 'red-600',
      titleColor: 'red-200',
    },
    {
      title: 'Continue TPA Network and TPA Web',
      timeframe: 'December 2024 to January 2025',
      items: [
        'Final week and evaluation for TPA Web for 24-2.',
        'Continue TPA Network for 24-1.',
      ],
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
      <Link
        to={'semester1'}
        horizontal={true}
        smooth={true}
        containerId={'semesterWorkplanContainer'}
        offset={-100}
      >
        <Timeline.Item className={'mb-8'}>
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
              Previous Semester
            </Timeline.Title>
          </Timeline.Content>
        </Timeline.Item>
      </Link>

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
        to={'semesterend'}
        horizontal={true}
        smooth={true}
        containerId={'semesterWorkplanContainer'}
        offset={-50}
      >
        <Timeline.Item className={'mb-8'}>
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
