/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { FlowbiteTimelinePointTheme } from 'flowbite-react';
import { List, Timeline } from 'flowbite-react';
import type { DeepPartial } from 'node_modules/flowbite-react/dist/types/types';
import { HiCalendar } from 'react-icons/hi';

import type IExperience from '@/components/experience/experience-interface';

interface TimelineItemProps {
  key: string | number;
  experience: IExperience;

  getTimelineTheme: (color: string) => DeepPartial<FlowbiteTimelinePointTheme>;
}

const TimelineItem = (props: TimelineItemProps) => {
  const theme = props.getTimelineTheme(props.experience.iconColor);

  return (
    <Timeline.Item key={props.key}>
      <Timeline.Point icon={HiCalendar} theme={theme} />

      <Timeline.Content className="ml-1">
        <Timeline.Title className={props.experience.titleColor}>
          {props.experience.title}
        </Timeline.Title>
        <Timeline.Time className="font-semibold">
          {props.experience.timeframe}
        </Timeline.Time>
        <Timeline.Body className="mt-2">
          <List className="mb-4 flex flex-col gap-1">
            {props.experience.items.map((item, index) => {
              return <List.Item key={index}>{item}</List.Item>;
            })}
          </List>
          <div className="flex flex-row">
            {props.experience.technologies.map((exp) => (
              <span
                key={exp}
                className="mr-1 hidden rounded-full bg-gray-800 px-2 py-1 text-xs font-semibold text-gray-50 md:inline-block"
              >
                {exp}
              </span>
            ))}
          </div>
        </Timeline.Body>
      </Timeline.Content>
    </Timeline.Item>
  );
};

export default TimelineItem;
