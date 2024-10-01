import { Modal } from 'flowbite-react';

import type { IProject } from '@/components/projects/EDisplayMode';

interface ProjectModalProps {
  project?: IProject;

  isVisible: boolean;
  onClose: () => void;
}

const ProjectModal = (props: ProjectModalProps) => {
  if (!props.project) return null;
  return (
    <Modal
      show={props.isVisible}
      onClose={props.onClose}
      size="7xl"
      className="w-full"
      dismissible
    >
      <Modal.Body className="w-full">
        <div className="flex w-full flex-row gap-12">
          {/* Left */}
          <div className="flex w-[200px] flex-col">
            <span className="text-2xl font-semibold">
              {props.project.title}
            </span>

            <span className="mt-6 text-lg font-semibold">Project Year</span>
            <span className=" text-gray-400">{props.project.year}</span>

            {props.project.link && (
              <>
                <span className="mt-12 text-lg font-semibold">
                  Publication Link
                </span>
                <span className="line-clamp-3 text-gray-400">
                  <a href={props.project.link} target="_blank" rel="noreferrer">
                    {props.project.link}
                  </a>
                </span>
              </>
            )}

            {props.project.github && (
              <>
                <span className="mt-12 text-lg font-semibold">GitHub</span>
                <span className="line-clamp-3 text-gray-400">
                  <a
                    href={props.project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {props.project.github}
                  </a>
                </span>
              </>
            )}

            <span className="mt-12 text-lg font-semibold">
              Technology Stack
            </span>
            {props.project.tags.map((tag, index) => (
              <span key={index} className="text-gray-400">
                {tag}
              </span>
            ))}
          </div>

          {/* Right */}
          <div className="flex w-max flex-col">
            <span className="text-lg font-semibold">Description</span>
            <span className="mt-6 text-lg font-semibold text-amber-500">
              {props.project.shortDescription}
            </span>
            <span className="mt-4 text-justify">
              {props.project.longDescription.join(' ')}
            </span>
            <div className="mt-4 grid auto-rows-[192px] grid-cols-3 gap-4">
              {props.project.images.map((image, i) => (
                <div
                  key={i}
                  className={`row-span-1 rounded-xl bg-neutral-100 ${
                    i === 1 || i === 2 ? 'col-span-2' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt="project"
                    className="size-full rounded-xl object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProjectModal;
