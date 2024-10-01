import { Element } from 'react-scroll';

import LBW1058 from '@/components/projects/LBW1058';
import LCoreV5 from '@/components/projects/LCoreV5';

const ProjectsCarousel = () => {
  return (
    <div
      id="projectsContainer"
      className="scrollbar-hide mx-16 my-4 flex flex-row gap-48 overflow-scroll"
    >
      <Element name="lbw1058" className="w-full flex-none snap-center">
        <LBW1058 />
      </Element>
      <Element name="lcorev5" className="w-full flex-none snap-center">
        <LCoreV5 />
      </Element>
    </div>
  );
};

export default ProjectsCarousel;
