import ProjectsCarousel from '@/components/projects/carousel/view';
import { EDisplayMode } from '@/components/projects/EDisplayMode';
import ProjectsGrid from '@/components/projects/grid/view';
import projects from '@/components/projects/items';

interface ProjectsViewProps {
  mode: EDisplayMode;
}

const ProjectsView = (props: ProjectsViewProps) => {
  if (props.mode === EDisplayMode.ALL) {
    return (
      <div className="px-10">
        <ProjectsGrid projects={projects} />
      </div>
    );
  } else {
    return (
      <div>
        <ProjectsCarousel projects={projects} />
      </div>
    );
  }
};

export default ProjectsView;
