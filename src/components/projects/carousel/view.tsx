import { useState } from 'react';
import { Element } from 'react-scroll';

import CarouselCard from '@/components/projects/carousel/card';
import type { IProject } from '@/components/projects/EDisplayMode';
import ProjectModal from '@/components/projects/modal/view';

interface ProjectsCarouselProps {
  projects: IProject[];
}

const ProjectsCarousel = (props: ProjectsCarouselProps) => {
  const [selectedProject, setSelectedProject] = useState<IProject | undefined>(
    undefined,
  );

  const handleProjectClick = (id: string) => {
    setSelectedProject(props.projects.find((project) => project.id === id));
  };

  const handleCloseModal = () => {
    setSelectedProject(undefined);
  };

  const getNextLink = (id: string) => {
    const index = props.projects.findIndex((project) => project.id === id);
    if (index === -1 || index === props.projects.length - 1) return 'next';
    return props.projects[index + 1].id;
  };

  const getPrevLink = (id: string) => {
    const index = props.projects.findIndex((project) => project.id === id);
    if (index === -1 || index === 0) return 'prev';
    return props.projects[index - 1].id;
  };

  return (
    <div
      id="projectsContainer"
      className="scrollbar-hide mx-16 my-4 flex flex-row gap-48 overflow-scroll"
    >
      <ProjectModal
        project={selectedProject}
        isVisible={selectedProject !== undefined}
        onClose={handleCloseModal}
      />

      {props.projects.map((project) => (
        <Element
          key={project.id}
          id={project.id}
          name={project.id}
          className="w-full flex-none snap-center"
        >
          <CarouselCard
            project={project}
            onCardClick={handleProjectClick}
            nextLink={getNextLink(project.id)}
            prevLink={getPrevLink(project.id)}
          />
        </Element>
      ))}
    </div>
  );
};

export default ProjectsCarousel;
