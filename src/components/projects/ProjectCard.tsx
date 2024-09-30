import { animated, useTransition } from '@react-spring/web';
import { Button } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';
import { Link } from 'react-scroll';

import ProjectModal from '@/components/projects/ProejctModal';

interface ProjectCardProps {
  title: string;
  shortDescription: string;
  year: string;
  descriptions: string[];
  images: string[];
  link?: string;
  github?: string;
  tags: string[];

  nextLink: string;
  prevLink: string;
}

const ProjectCard = (props: ProjectCardProps) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [imgIndex, setImgIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const transition = useTransition(imgIndex, {
    key: imgIndex,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: 1000,
    },
    exitBeforeEnter: true,
  });

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (!isHovered) {
      timeout = setTimeout(() => {
        scrollImage();
      }, 5000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [imgIndex, isHovered]);

  function scrollImage() {
    setImgIndex((prevIndex) => (prevIndex + 1) % props.images.length);
  }

  const element: JSX.Element = (
    <div className="flex w-full flex-col items-center justify-center gap-4 text-center">
      <div className="mt-4 flex w-full flex-col rounded-md bg-black p-2 text-start font-mono text-slate-400">
        <p>{'/**'}</p>
        {props.descriptions.map((description, index) => (
          <p key={index}>&nbsp;* {description}</p>
        ))}
        <p>&nbsp;*/</p>
      </div>

      <div className="flex w-max flex-row gap-2 self-start">
        {props.tags.map((tag, index) => (
          <Button key={index} color="gray" className="p-0" pill>
            {tag}
          </Button>
        ))}
      </div>

      <div className="mt-4 flex w-max flex-row gap-4 self-end">
        {props.github && (
          <a href={props.github} target="_blank" rel="noreferrer">
            <Button color="blue">
              <div className="flex flex-row items-center gap-2">
                <FaGithub className="size-5 cursor-pointer text-white hover:scale-110" />
                <span className="text-lg">GitHub</span>
              </div>
            </Button>
          </a>
        )}
        {props.link && (
          <a href={props.link} target="_blank" rel="noreferrer">
            <Button color="blue">
              <div className="flex flex-row items-center gap-2">
                <FaLink className="size-5 cursor-pointer text-white hover:scale-110" />
                <span className="text-lg">Other Link</span>
              </div>
            </Button>
          </a>
        )}
      </div>
    </div>
  );

  return (
    <div>
      <ProjectModal
        title={props.title}
        content={element}
        visible={isModalOpen}
        handleClose={function (): void {
          setModalOpen(false);
        }}
      />
      <div className="flex h-max flex-col gap-2 object-cover">
        <div
          className="scrollbar-hide cursor-pointer snap-x snap-mandatory flex-row gap-8"
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          onClick={() => {
            scrollImage();
          }}
        >
          {transition((style, i) => (
            <animated.div
              className="innovation-image snap-center rounded-lg"
              style={{
                ...style,
                opacity: style.opacity,
                backgroundImage: `url(${props.images[i]})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                borderRadius: '1rem',
              }}
            />
          ))}
        </div>

        <div className="mt-4 flex flex-col">
          <div
            className="relative w-fit animate-pulse cursor-pointer self-center px-6 pt-2 text-center text-3xl font-semibold text-white transition-all hover:scale-105 md:animate-none"
            onClick={() => {
              setModalOpen(true);
            }}
          >
            {props.title}
          </div>
          <div className="text-center text-gray-500">
            {props.shortDescription}
          </div>
          <div className="text-center text-sm text-gray-700">
            ({props.year})
          </div>

          <div className="mt-4 flex flex-row items-center justify-center gap-2">
            <Link
              to={props.prevLink == 'prev' ? 'aboutme' : props.prevLink}
              containerId={props.prevLink == 'prev' ? '' : 'projectsContainer'}
              smooth={true}
              horizontal={props.prevLink == 'prev' ? false : true}
            >
              <Button gradientMonochrome="purple">Previous</Button>
            </Link>
            <Link
              to={props.nextLink == 'next' ? 'contacts' : props.nextLink}
              containerId={props.nextLink == 'next' ? '' : 'projectsContainer'}
              smooth={true}
              horizontal={props.nextLink == 'next' ? false : true}
            >
              <Button gradientMonochrome="success">Next</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
