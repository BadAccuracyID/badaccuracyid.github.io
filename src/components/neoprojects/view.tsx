import ProjectsCarousel from '@/components/neoprojects/carousel/view';
import { EDisplayMode } from '@/components/neoprojects/EDisplayMode';
import ProjectsGrid from '@/components/neoprojects/grid/view';

interface ProjectsViewProps {
  mode: EDisplayMode;
}

const ProjectsView = (props: ProjectsViewProps) => {
  if (props.mode === EDisplayMode.ALL) {
    return <ProjectsGrid />;
  } else {
    return <ProjectsCarousel />;
  }
};

export default ProjectsView;
