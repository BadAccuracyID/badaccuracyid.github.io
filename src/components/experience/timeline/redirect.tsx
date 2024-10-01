/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { FlowbiteTimelinePointTheme } from 'flowbite-react';
import { Timeline } from 'flowbite-react';
import type { DeepPartial } from 'node_modules/flowbite-react/dist/types/types';
import type { IconType } from 'react-icons/lib';
import { Link } from 'react-scroll';

interface TimelineRedirectItemProps {
  to: string;
  toContainerId: string;
  horizontal: boolean;

  title: string;
  icon: IconType;

  getTimelineTheme: (color: string) => DeepPartial<FlowbiteTimelinePointTheme>;
}

const TimelineRedirectItem = (props: TimelineRedirectItemProps) => {
  const theme = props.getTimelineTheme('purple-600');

  return (
    <Link
      to={props.to}
      containerId={props.toContainerId}
      horizontal={props.horizontal}
      offset={-50}
      smooth
    >
      <Timeline.Item className="mb-8">
        <Timeline.Point icon={props.icon} theme={theme} />

        <Timeline.Content className="ml-1">
          <Timeline.Title className="cursor-pointer text-white duration-100 hover:text-slate-300">
            {props.title}
          </Timeline.Title>
        </Timeline.Content>
      </Timeline.Item>
    </Link>
  );
};

export default TimelineRedirectItem;
