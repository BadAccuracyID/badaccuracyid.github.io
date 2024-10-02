import { useRef, useState } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';

import GridCard from '@/components/projects/grid/card';
import ProjectModal from '@/components/projects/modal/view';
import type { IProject } from '@/components/projects/project-interface';

interface ProjectsGridProps {
  projects: IProject[];
}

const ProjectsGrid = (props: ProjectsGridProps) => {
  const [selectedProject, setSelectedProject] = useState<IProject | undefined>(
    undefined,
  );
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

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
      <div
        className="scrollbar-hide grid cursor-grab auto-cols-max grid-flow-col grid-rows-2 gap-4 overflow-x-scroll"
        {...events}
        ref={ref}
      >
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
