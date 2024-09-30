import { type DeepPartial, Timeline } from 'flowbite-react';
import type { FlowbiteTimelinePointTheme } from 'flowbite-react/lib/esm/components/Timeline/TimelinePoint';
import { AiFillStar } from 'react-icons/ai';
import { HiCalendar } from 'react-icons/hi';
import { Link } from 'react-scroll';

interface WorkProgramTimelineProps {
  title: string;
  timeframe: string;
  items: string[];

  iconColor: string | undefined;
  titleColor: string | undefined;
}

export function SemesterEndTimeline() {
  const data: WorkProgramTimelineProps[] = [
    {
      title: 'Finish all unfinished work',
      timeframe: 'January 2025',
      items: [
        'Final week and evaluation for TPA Network for 24-1.',
        'Post training and qualification for new 25-1 assistants.',
        '...',
      ],
      iconColor: 'cyan-600',
      titleColor: 'cyan-200',
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
        to={'semester2'}
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

      <Link to={'projects'} horizontal={false} smooth={true} offset={-50}>
        <Timeline.Item className={'mb-8'}>
          <Timeline.Point
            icon={AiFillStar}
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
              My Projects
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
