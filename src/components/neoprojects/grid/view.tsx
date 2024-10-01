import type { IProject } from '@/components/neoprojects/EDisplayMode';
import GridCard from '@/components/neoprojects/grid/card';

interface ProjectsGridProps {
  projects: IProject[];
}

const ProjectsGrid = (props: ProjectsGridProps) => {
  return (
    <div className="scrollbar-hide grid auto-cols-max grid-flow-col grid-rows-2 gap-4 overflow-x-scroll">
      {props.projects.map((project) => (
        <div key={project.title} className="size-full">
          <GridCard project={project} />
        </div>
      ))}
    </div>
  );
};

export default ProjectsGrid;
