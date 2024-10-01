/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import { FaGithub, FaInfoCircle, FaLink } from 'react-icons/fa';

import type { IProject } from '@/components/neoprojects/EDisplayMode';
import { cn } from '@/util/utils';

interface GridCardProps {
  project: IProject;
  onCardClick: (id: string) => void;
}

const GridCard = (props: GridCardProps) => {
  const image = props.project.images[0];

  return (
    <div
      className={cn(
        ' cursor-pointer overflow-hidden relative card h-60 md:h-96 max-w-xs md:max-w-lg rounded-md shadow-xl mx-auto backgroundImage flex flex-col justify-between p-4 group/card',
      )}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute left-0 top-0 size-full bg-black bg-opacity-50 opacity-60 transition duration-300 group-hover/card:bg-opacity-90"></div>

      <div className="z-10 flex flex-row items-center space-x-4 transition duration-300 group-hover/card:opacity-0">
        <div className="flex flex-col">
          <p className="relative z-10 text-base font-normal text-gray-50">
            {props.project.company}
          </p>
          <p className="text-sm text-gray-400">{props.project.year}</p>
        </div>
      </div>

      <div className="z-10 hidden flex-row items-center space-x-4 self-center opacity-0 transition duration-300 group-hover/card:opacity-100 md:group-hover/card:flex">
        {props.project.github && (
          <button
            type="button"
            className="flex w-auto flex-row items-center justify-center gap-2 rounded-lg border border-gray-50 px-4 py-2 text-gray-50 transition duration-300 hover:scale-105"
            onClick={() => window.open(props.project.github, '_blank')}
          >
            <FaGithub className="size-4 text-gray-50" />
            <span className="text-sm font-semibold">GitHub</span>
          </button>
        )}
        {props.project.link && (
          <button
            type="button"
            className="flex w-auto flex-row items-center justify-center gap-2 rounded-lg border border-gray-50 px-4 py-2 text-gray-50 transition duration-300 hover:scale-105"
            onClick={() => window.open(props.project.link, '_blank')}
          >
            <FaLink className="size-4 text-gray-50" />
            <span className="text-sm font-semibold">Other Link</span>
          </button>
        )}
        <button
          type="button"
          className="flex w-auto flex-row items-center justify-center gap-2 rounded-lg border border-gray-50 px-4 py-2 text-gray-50 transition duration-300 hover:scale-105"
          onClick={() => {
            props.onCardClick(props.project.id);
          }}
        >
          <FaInfoCircle className="size-4 text-gray-50" />
          <span className="text-sm font-semibold">More Info</span>
        </button>
      </div>

      <div>
        <h1 className="relative z-10 text-sm text-gray-50 transition duration-300 group-hover/card:opacity-0">
          {props.project.tags.map((tag) => (
            <span
              key={tag}
              className="mr-1 hidden rounded-full bg-gray-800 px-2 py-1 text-xs font-semibold text-gray-50 md:inline-block"
            >
              {tag}
            </span>
          ))}
        </h1>
        <h1 className="relative z-10 text-xl font-bold text-gray-50 md:text-2xl">
          {props.project.title}
        </h1>
        <p className="relative z-10 mt-4 line-clamp-2 text-sm font-normal text-gray-50 md:line-clamp-4">
          {props.project.shortDescription}
        </p>
      </div>
    </div>
  );
};

export default GridCard;
