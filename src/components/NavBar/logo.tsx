import { Link } from 'react-scroll';

interface NavBarLogoProps {
  setActive: (arg: string) => void;
}

const NavBarLogo = (props: NavBarLogoProps) => {
  const link = 'start';

  const handleClick = () => {
    props.setActive(link);
  };

  const handleSetActive = () => {
    props.setActive(link);
  };

  return (
    <Link
      onClick={handleClick}
      onSetActive={handleSetActive}
      to={link}
      offset={-50}
      duration={500}
      spy
      smooth
    >
      <div className="flex h-full cursor-pointer flex-col items-center justify-center">
        <p className="self-center text-3xl font-semibold text-white">
          BadAccuracyID
          <span className="text-purple-600">/&gt;</span>
        </p>
      </div>
    </Link>
  );
};

export default NavBarLogo;
