import { Element } from 'react-scroll';

import ProjectsGrid from '@/components/projects/grid/view';
import projects from '@/components/projects/items';

const ProjectsComponent = () => {
  return (
    <Element
      id="projects"
      name="projects"
      className="left-pad mt-10 flex min-h-screen flex-col justify-center gap-4"
    >
      <div className="pl-5">
        <div className="text-xl text-gray-600">fun projects() {'{'}</div>
      </div>

      <div className="px-10">
        <ProjectsGrid projects={projects} />
      </div>

      <div className="pl-5">
        <div className="text-xl text-gray-600">{'}'}</div>
      </div>
    </Element>
  );
};

export default ProjectsComponent;
