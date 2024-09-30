import { animated, useTransition } from '@react-spring/web';
import { Button } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { AiFillInfoCircle } from 'react-icons/ai';
import { FaGithub, FaLink } from 'react-icons/fa';
import { Link } from 'react-scroll';

import PopupWrapper from '@/components/popup/PopupWrapper';

interface ProjectCardProps {
  title: string;
  shortDescription: string;
  descriptions: string[];
  images: string[];
  link?: string;
  github?: string;
  tags: string[];

  nextLink: string;
  prevLink: string;
}

const ProjectCard = (props: ProjectCardProps) => {
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
    <div
      className={
        'z-50 flex w-fit flex-col items-center justify-center gap-2 text-center'
      }
    >
      <p className={'text-2xl font-bold text-white'}>{props.title}</p>
      <div className="flex flex-row gap-4">
        <a href={props.github} target="_blank" rel="noreferrer">
          <FaGithub
            className={'size-6 cursor-pointer text-white hover:scale-110'}
          />
        </a>
        <a href={props.link} target="_blank" rel="noreferrer">
          <FaLink
            className={'size-6 cursor-pointer text-white hover:scale-110'}
          />
        </a>
      </div>

      <div
        className={
          'mt-4 flex flex-col rounded-md bg-black p-2 text-start font-mono text-slate-400'
        }
      >
        <p>{'/**'}</p>
        {props.descriptions.map((description, index) => (
          <p key={index}>&nbsp;* {description}</p>
        ))}
        <p>&nbsp;*/</p>
      </div>
    </div>
  );

  const [toggle, popup] = PopupWrapper(element);
  return (
    <div>
      {popup}
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
          <div className="relative w-fit self-center px-6 pt-2 text-center text-3xl font-semibold text-white">
            {props.title}
            <div
              className={'absolute right-0 top-0'}
              onClick={() => {
                toggle(true);
              }}
            >
              <AiFillInfoCircle
                className={'size-6 cursor-pointer text-gray-500'}
              />
            </div>
          </div>
          <div className="text-center text-gray-500">
            {props.shortDescription}
          </div>

          <div
            className={'mt-4 flex flex-row items-center justify-center gap-2'}
          >
            <Link
              to={props.prevLink}
              containerId={'projectsContainer'}
              smooth={true}
              horizontal={true}
            >
              <Button
                className={
                  'w-fit self-center bg-purple-600 font-semibold duration-100 hover:bg-purple-700'
                }
                gradientMonochrome="purple"
              >
                Previous
              </Button>
            </Link>
            <Link
              to={props.nextLink}
              containerId={'projectsContainer'}
              smooth={true}
              horizontal={true}
            >
              <Button
                className={
                  'w-fit self-center bg-purple-600 font-semibold duration-100 hover:bg-purple-700'
                }
                gradientMonochrome="success"
              >
                Next
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
