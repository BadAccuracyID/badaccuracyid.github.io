import { Fade } from 'react-awesome-reveal';
import { Element } from 'react-scroll';

import { Experience1 } from '@/components/experience/Experience1';
import { Experience2 } from '@/components/experience/Experience2';

const Experiences = () => {
  return (
    <div
      id="experienceContainer"
      className="scrollbar-hide mt-8 flex flex-row gap-48 overflow-scroll pl-16 pr-64 pt-4"
    >
      <Element
        name="experience1"
        className="flex w-full flex-none snap-center flex-row items-start justify-start"
      >
        <Fade fraction={0.4} cascade={true}>
          <Experience1 />
        </Fade>
      </Element>

      <Element
        name="experience2"
        className="flex w-full flex-none snap-center flex-row items-center justify-start"
      >
        <Fade fraction={0.4} cascade={true}>
          <Experience2 />
        </Fade>
      </Element>
    </div>
  );
};

export default Experiences;
