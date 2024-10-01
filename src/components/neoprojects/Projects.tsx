import { useState } from 'react';
import { Element } from 'react-scroll';

import { EDisplayMode } from '@/components/neoprojects/EDisplayMode';
import ModeSelector from '@/components/neoprojects/modeselector';
import ProjectsView from '@/components/neoprojects/view';

const ProjectsComponent = () => {
  const [displayMode, setDisplayMode] = useState(EDisplayMode.ALL);

  return (
    <Element
      id="projects"
      name="projects"
      className="left-pad mt-10 flex min-h-screen flex-col justify-center gap-4"
    >
      <div className="pl-5">
        <div className="text-xl text-gray-600">fun projects() {'{'}</div>
      </div>

      <ModeSelector mode={displayMode} setMode={setDisplayMode} />
      <ProjectsView mode={displayMode} />

      <div className="pl-5">
        <div className="text-xl text-gray-600">{'}'}</div>
      </div>
    </Element>
  );
};

export default ProjectsComponent;
