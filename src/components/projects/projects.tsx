import { Fade } from 'react-awesome-reveal';
import { Element } from 'react-scroll';

import EFIO from '@/components/projects/EFIO';
import LBW1058 from '@/components/projects/LBW1058';
import LCoreV5 from '@/components/projects/LCoreV5';
import LCoreV7 from '@/components/projects/LCoreV7';
import LEss from '@/components/projects/LEss';

const ProjectsComponent = () => {
  return (
    <Element
      id="projects"
      name="projects"
      className={'left-pad mt-10 flex min-h-screen flex-col justify-center'}
    >
      <div className="flex flex-row gap-3 pl-5">
        <div className="text-xl text-gray-600">fun projects() {'{'}</div>
      </div>

      <Fade fraction={0.5}>
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
          <Element name="lcorev7" className="w-full flex-none snap-center">
            <LCoreV7 />
          </Element>
          <Element name="less" className="w-full flex-none snap-center">
            <LEss />
          </Element>
          <Element name="efio" className="w-full flex-none snap-center">
            <EFIO />
          </Element>
        </div>
      </Fade>

      <div className="flex flex-row gap-3 pl-5">
        <div className="text-xl text-gray-600">{'}'}</div>
      </div>
    </Element>
  );
};
export default ProjectsComponent;
