import { Modal } from 'flowbite-react';

interface ImageModalProps {
  src: string | undefined;
  isVisible: boolean;
  onClose: () => void;
}

const ImageModal = (props: ImageModalProps) => {
  const size = window.innerWidth < 600 ? '' : '6xl';
  if (!props.src) return null;
  return (
    <Modal
      show={props.isVisible}
      onClose={props.onClose}
      size={size}
      dismissible
    >
      <Modal.Body className="scrollbar-hide w-full overflow-hidden">
        <img src={props.src} alt="modal" className="w-full" />
      </Modal.Body>
    </Modal>
  );
};

export default ImageModal;
