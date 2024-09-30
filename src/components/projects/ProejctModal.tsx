import { Modal } from 'flowbite-react';
import type { ReactNode } from 'react';

interface ProjectModalProps {
  title: string;
  content: ReactNode;

  visible: boolean;
  handleClose: () => void;
}

const ProjectModal = (props: ProjectModalProps) => {
  return (
    <Modal
      show={props.visible}
      onClose={() => {
        props.handleClose();
      }}
      dismissible
      size="6xl"
      className="rounded-md"
    >
      <Modal.Body className="card-color rounded-md">
        <div className="flex flex-col">
          <span className="self-center text-3xl font-bold text-white">
            {props.title}
          </span>
          <span>{props.content}</span>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProjectModal;
