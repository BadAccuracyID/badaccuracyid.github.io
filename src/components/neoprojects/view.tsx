import ProjectsCarousel from '@/components/neoprojects/carousel/view';
import { EDisplayMode } from '@/components/neoprojects/EDisplayMode';
import ProjectsGrid from '@/components/neoprojects/grid/view';
import projects from '@/components/neoprojects/items';

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
