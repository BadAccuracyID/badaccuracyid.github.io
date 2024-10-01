import { animated, useTransition } from '@react-spring/web';
import { Button } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

import type { IProject } from '@/components/neoprojects/EDisplayMode';

interface CarouselCardProps {
  project: IProject;
  onCardClick: (id: string) => void;

  nextLink: string;
  prevLink: string;
}

const CarouselCard = (props: CarouselCardProps) => {
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

  const scrollImage = () => {
    setImgIndex((prevIndex) => (prevIndex + 1) % props.project.images.length);
  };

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

  return (
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
              backgroundImage: `url(${props.project.images[i]})`,
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
            props.onCardClick(props.project.id);
          }}
        >
          {props.project.title}
        </div>
        <div className="text-center text-gray-500">
          {props.project.shortDescription}
        </div>
        <div className="text-center text-sm text-gray-700">
          {props.project.company} - {props.project.year}
        </div>

        <div className="mt-4 flex flex-row items-center justify-center gap-2">
          <Link
            to={props.prevLink == 'prev' ? 'experiences' : props.prevLink}
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
  );
};

export default CarouselCard;
