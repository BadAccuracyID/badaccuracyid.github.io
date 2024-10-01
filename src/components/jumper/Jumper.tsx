import { Button } from 'flowbite-react';
import { TbCircleDot } from 'react-icons/tb';
import { Link } from 'react-scroll';

const JumperComponent = () => {
  return (
    <Link
      to="start"
      smooth
      spy
      hashSpy
      duration={500}
      className="vertical-timeline-end flex flex-row items-center gap-2"
    >
      <TbCircleDot className="vertical-timeline-end-dot size-6 bg-purple-700" />
      <Button gradientMonochrome="failure" className="px-4" pill>
        jmp start
      </Button>
    </Link>
  );
};

export default JumperComponent;
