import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';

import ImageModal from '@/components/projects/modal/image';
import type { IProject } from '@/components/projects/project-interface';

interface ProjectModalProps {
  project?: IProject;

  isVisible: boolean;
  onClose: () => void;
}

const ProjectModal = (props: ProjectModalProps) => {
  const [modalImage, setModalImage] = useState<string | undefined>(undefined);

  const size = window.innerWidth < 600 ? '' : '7xl';
  if (!props.project) return null;
  return (
    <>
      <ImageModal
        src={modalImage}
        isVisible={modalImage !== undefined}
        onClose={() => {
          setModalImage(undefined);
        }}
      />
      <Modal show={props.isVisible} onClose={props.onClose} size={size}>
        <Modal.Body className="scrollbar-hide w-full overflow-hidden">
          <div className="flex w-full flex-col gap-8 md:flex-row">
            {/* Left */}
            <div className="flex h-full w-2/12 flex-col">
              <span className="text-3xl font-bold md:text-2xl md:font-semibold">
                {props.project.title}
              </span>

              <span className="mt-4 text-lg font-semibold md:mt-6">
                Project Year
              </span>
              <span className="text-gray-400">{props.project.year}</span>

              {props.project.link && (
                <>
                  <span className="mt-6 text-lg font-semibold md:mt-12">
                    Publication Link
                  </span>
                  <span className="line-clamp-3 text-gray-400">
                    <a
                      href={props.project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {props.project.link}
                    </a>
                  </span>
                </>
              )}

              {props.project.github && (
                <>
                  <span className="mt-6 text-lg font-semibold md:mt-12">
                    GitHub
                  </span>
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

              <span className="mt-6 text-lg font-semibold md:mt-12">
                Technology Stack
              </span>
              {props.project.tags.map((tag, index) => (
                <span key={index} className="text-gray-400">
                  {tag}
                </span>
              ))}
            </div>

            {/* Right */}
            <div className="scrollbar-hide flex w-10/12 flex-col">
              <span className="text-2xl font-semibold md:text-lg">
                Description
              </span>
              <span className="mt-2 text-lg font-semibold text-amber-500 md:mt-6">
                {props.project.shortDescription}
              </span>
              <span className="mt-2 text-justify md:mt-4">
                {props.project.longDescription.join(' ')}
              </span>
              <div className="mt-4 flex flex-col gap-2 md:grid md:auto-rows-[192px] md:grid-cols-3 md:gap-4">
                {props.project.images.map((image, i) => (
                  <div
                    key={i}
                    className={`cursor-pointer rounded-xl bg-neutral-100 md:row-span-1 ${
                      i === 1 || i === 2 ? 'col-span-2' : ''
                    }`}
                    onClick={() => {
                      setModalImage(image);
                    }}
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
        <Modal.Footer className="w-full">
          <div className="flex w-full justify-center md:justify-end">
            <Button
              color="failure"
              onClick={props.onClose}
              className="self-end"
            >
              Close
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProjectModal;
