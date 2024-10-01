/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { FlowbiteTimelinePointTheme } from 'flowbite-react';
import { Timeline } from 'flowbite-react';
import type { DeepPartial } from 'node_modules/flowbite-react/dist/types/types';
import { Fade } from 'react-awesome-reveal';
import { FaArrowLeft, FaArrowRight, FaCode, FaUser } from 'react-icons/fa';
import { Element } from 'react-scroll';

import type IExperience from '@/components/experience/experience-interface';
import TimelineItem from '@/components/experience/timeline/item';
import TimelineRedirectItem from '@/components/experience/timeline/redirect';

interface TimelineProps {
  experiences: IExperience[];
  name: string;

  redirectNext?: string;
  redirectPrev?: string;
}

const TimelineComponent = (props: TimelineProps) => {
  const getTimelineTheme = (
    color: string,
  ): DeepPartial<FlowbiteTimelinePointTheme> => {
    const background = 'bg-' + color;
    const ring = 'ring-' + color;

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
  };

  return (
    <Element
      name={props.name}
      className="flex w-full flex-none snap-center flex-row items-start justify-start"
    >
      <Fade fraction={0.3} cascade>
        <Timeline className="w-auto border-l-2 border-l-purple-700">
          <TimelineRedirectItem
            to={props.redirectPrev ?? 'aboutme'}
            toContainerId={
              props.redirectPrev !== undefined ? 'experienceContainer' : ''
            }
            horizontal={props.redirectPrev !== undefined}
            title={'Back'}
            icon={props.redirectPrev !== undefined ? FaArrowLeft : FaUser}
            getTimelineTheme={getTimelineTheme}
          />

          {props.experiences.map((experience, index) => {
            return (
              <TimelineItem
                key={index}
                experience={experience}
                getTimelineTheme={getTimelineTheme}
              />
            );
          })}

          <TimelineRedirectItem
            to={props.redirectNext ?? 'projects'}
            toContainerId={
              props.redirectNext !== undefined ? 'experienceContainer' : ''
            }
            horizontal={props.redirectNext !== undefined}
            title={'Next'}
            icon={props.redirectNext !== undefined ? FaArrowRight : FaCode}
            getTimelineTheme={getTimelineTheme}
          />
        </Timeline>
      </Fade>
    </Element>
  );
};

export default TimelineComponent;

// function GetTimeline(props: TimelineProps) {
//   return (
//     <Timeline className="w-auto border-l-2 border-l-purple-700">
//       <Link to="aboutme" smooth={true} offset={-50}>
//         <Timeline.Item className="mb-8">
//           <Timeline.Point
//             icon={FaUser}
//             theme={getTimelineTheme('purple-600')}
//           />

//           <Timeline.Content className="ml-1">
//             <Timeline.Title className="cursor-pointer text-white duration-100 hover:text-slate-300">
//               Back About Me
//             </Timeline.Title>
//           </Timeline.Content>
//         </Timeline.Item>
//       </Link>

//       {props.experiences.map((experience, index) => {
//         return <TimelineItem key={index} experience={experience} />;
//       })}

//       <Link
//         to="experience2"
//         containerId="experienceContainer"
//         offset={-50}
//         horizontal
//         smooth
//       >
//         <Timeline.Item className="mb-8">
//           <Timeline.Point
//             icon={FaArrowRight}
//             theme={getTimelineTheme('purple-600')}
//           />

//           <Timeline.Content className="ml-1">
//             <Timeline.Title className="cursor-pointer text-white duration-100 hover:text-slate-300">
//               Next Experience (2/2)
//             </Timeline.Title>
//           </Timeline.Content>
//         </Timeline.Item>
//       </Link>
//     </Timeline>
//   );
// }
