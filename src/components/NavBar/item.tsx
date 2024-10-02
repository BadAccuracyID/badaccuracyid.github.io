import { Link } from 'react-scroll';

interface NavBarItemProps {
  title: string;
  isActive: boolean;
  offset: number;
  setActive: (arg: string) => void;
}

const NavBarItem = (props: NavBarItemProps) => {
  const titleClass = `inline-block pl-2 pr-1 py-2 rounded-lg duration-100 text-xl font-semibold ${props.isActive ? 'text-white' : 'text-gray-500'}`;
  const suffixClass = `inline-block rounded-lg duration-100 text-xl font-semibold ${props.isActive ? 'text-gray-400' : 'text-gray-600'}`;

  const destination = props.title.replace(/\s+/g, '').toLowerCase();

  const handleClick = () => {
    props.setActive(props.title);
  };

  const handleSetActive = () => {
    props.setActive(props.title);
  };

  return (
    <Link
      onClick={handleClick}
      onSetActive={handleSetActive}
      to={destination}
      offset={props.offset}
      duration={500}
      spy
      hashSpy
      smooth
    >
      <li className="flex cursor-pointer flex-row items-center justify-center hover:text-gray-200">
        <p className={titleClass}>{props.title}</p>
        <p className={suffixClass}>/&gt;</p>
      </li>
    </Link>
  );
};

export default NavBarItem;
