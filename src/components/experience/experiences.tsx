import { Fade } from 'react-awesome-reveal';
import { Element } from 'react-scroll';

import { Experience1 } from '@/components/experience/Experience1';
import { Experience2 } from '@/components/experience/Experience2';

const ExperiencesComponent = () => {
  return (
    <Element
      id="experiences"
      name="experiences"
      className="left-pad mt-10 flex min-h-screen flex-col justify-center"
    >
      <div className="flex flex-row gap-3 pl-5">
        <div className="text-xl text-gray-600">fun workExperience() {'{'}</div>
      </div>

      <Fade fraction={0.4} cascade>
        <div
          id="experienceContainer"
          className="scrollbar-hide mt-8 flex flex-row gap-16 overflow-scroll pl-16 pr-4 pt-4 md:gap-48 md:pr-64"
        >
          <Element
            name="experience1"
            className="flex w-full flex-none snap-center flex-row items-start justify-start"
          >
            <Fade fraction={0.3} cascade>
              <Experience1 />
            </Fade>
          </Element>

          <Element
            name="experience2"
            className="flex w-full flex-none snap-center flex-row items-center justify-start"
          >
            <Fade fraction={0.3} cascade>
              <Experience2 />
            </Fade>
          </Element>
        </div>
      </Fade>

      <div className="flex flex-row gap-3 pl-5">
        <div className="text-xl text-gray-600">{'}'}</div>
      </div>
    </Element>
  );
};

export default ExperiencesComponent;
