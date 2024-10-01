import { useState } from 'react';

import type { IProject } from '@/components/neoprojects/EDisplayMode';
import GridCard from '@/components/neoprojects/grid/card';
import ProjectModal from '@/components/neoprojects/modal/view';

interface ProjectsGridProps {
  projects: IProject[];
}

const ProjectsGrid = (props: ProjectsGridProps) => {
  const [selectedProject, setSelectedProject] = useState<IProject | undefined>(
    undefined,
  );

  const handleProjectClick = (id: string) => {
    setSelectedProject(props.projects.find((project) => project.id === id));
  };

  const handleCloseModal = () => {
    setSelectedProject(undefined);
  };

  return (
    <>
      <ProjectModal
        project={selectedProject}
        isVisible={selectedProject !== undefined}
        onClose={handleCloseModal}
      />
      <div className="scrollbar-hide grid auto-cols-max grid-flow-col grid-rows-2 gap-4 overflow-x-scroll">
        {props.projects.map((project) => (
          <div key={project.title} className="size-full">
            <GridCard project={project} onCardClick={handleProjectClick} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectsGrid;
