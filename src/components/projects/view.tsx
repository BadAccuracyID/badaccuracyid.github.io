import { animated, useSpring } from '@react-spring/web';

import ProjectsCarousel from '@/components/projects/carousel/view';
import { EDisplayMode } from '@/components/projects/EDisplayMode';
import ProjectsGrid from '@/components/projects/grid/view';
import projects from '@/components/projects/items';

interface ProjectsViewProps {
  mode: EDisplayMode;
}

const ProjectsView = (props: ProjectsViewProps) => {
  const gridSpring = useSpring({
    opacity: props.mode === EDisplayMode.ALL ? 1 : 0,
    transform: props.mode === EDisplayMode.ALL ? 'scale(1)' : 'scale(0.9)',
    display: props.mode === EDisplayMode.ALL ? 'block' : 'none',
  });

  const carouselSpring = useSpring({
    opacity: props.mode === EDisplayMode.CAROUSEL ? 1 : 0,
    transform: props.mode === EDisplayMode.CAROUSEL ? 'scale(1)' : 'scale(0.9)',
    display: props.mode === EDisplayMode.CAROUSEL ? 'block' : 'none',
  });

  return (
    <div className="w-full">
      <animated.div style={gridSpring}>
        <div className="px-10">
          <ProjectsGrid projects={projects} />
        </div>
      </animated.div>
      <animated.div style={carouselSpring}>
        <ProjectsCarousel projects={projects} />
      </animated.div>
    </div>
  );
};

export default ProjectsView;
