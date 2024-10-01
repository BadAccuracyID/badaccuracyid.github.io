import { Button } from 'flowbite-react';
import { FaClone, FaGripHorizontal } from 'react-icons/fa';

import { EDisplayMode } from '@/components/projects/EDisplayMode';

interface ModeSelectorProps {
  mode: EDisplayMode;
  setMode: (mode: EDisplayMode) => void;
}

const ModeSelector = (props: ModeSelectorProps) => {
  const handleClick = (mode: EDisplayMode) => {
    props.setMode(mode);
  };

  const isDisabled = (mode: EDisplayMode) => {
    return props.mode === mode;
  };

  return (
    <Button.Group className="mr-16 flex self-end pl-5">
      <Button
        color="dark"
        className="flex flex-col items-center gap-2"
        disabled={isDisabled(EDisplayMode.CAROUSEL)}
        onClick={() => {
          handleClick(EDisplayMode.CAROUSEL);
        }}
      >
        <FaClone className="mr-2 size-5" />
        <span>Carousel</span>
      </Button>

      <Button
        color="dark"
        className="flex flex-col items-center gap-2"
        disabled={isDisabled(EDisplayMode.ALL)}
        onClick={() => {
          handleClick(EDisplayMode.ALL);
        }}
      >
        <FaGripHorizontal className="mr-2 size-5" />
        <span>All</span>
      </Button>
    </Button.Group>
  );
};

export default ModeSelector;
