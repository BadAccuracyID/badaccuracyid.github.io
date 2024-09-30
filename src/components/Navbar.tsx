import { useState } from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
  const [activeItem, setActiveItem] = useState<string>('');

  function isActive(item: string) {
    return item === activeItem;
  }

  return (
    <div className="navbar-blur fixed z-50 hidden w-full flex-row flex-wrap items-center justify-between px-3 py-1 md:flex">
      {/* Logo or Image */}
      <Link
        to="start"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        onClick={() => {
          setActiveItem('start');
        }}
        onSetActive={() => {
          setActiveItem('start');
        }}
      >
        <div
          className={
            'flex h-full cursor-pointer flex-col items-center justify-center'
          }
        >
          <p className={'self-center text-3xl font-semibold text-white'}>
            BadAccuracyID
            <span className={'text-purple-600'}>/&gt;</span>
          </p>
        </div>
      </Link>

      {/* Items */}
      <ul className="flex flex-row flex-wrap items-center justify-between gap-2">
        <NavBarItem
          item="About Me"
          active={isActive('About Me')}
          setActiveItem={setActiveItem}
        />
        {/* <NavBarItem
          item={'Pros and Cons'}
          active={isActive('Pros and Cons')}
          setActiveItem={setActiveItem}
        />
        <NavBarItem
          item={'Work Plan'}
          active={isActive('Work Plan')}
          setActiveItem={setActiveItem}
        /> */}
        <NavBarItem
          item="Projects"
          active={isActive('Projects')}
          setActiveItem={setActiveItem}
        />
        <NavBarItem
          item="Contacts"
          active={isActive('Contacts')}
          setActiveItem={setActiveItem}
        />
      </ul>
    </div>
  );
}

function NavBarItem({
  item,
  active,
  setActiveItem,
}: {
  item: string;
  active: boolean;
  setActiveItem: (arg: string) => void;
}) {
  const classes = `inline-block pl-2 pr-1 py-2 rounded-lg duration-100 text-xl font-semibold ${active ? 'text-white' : 'text-gray-500'}`;
  const classes2 = `inline-block rounded-lg duration-100 text-xl font-semibold ${active ? 'text-gray-400' : 'text-gray-600'}`;

  return (
    <Link
      onClick={() => {
        setActiveItem(item);
      }}
      onSetActive={() => {
        setActiveItem(item);
      }}
      to={item.replace(/\s+/g, '').toLowerCase()}
      spy={true}
      hashSpy={true}
      smooth={true}
      offset={-50}
      duration={500}
    >
      <li className="flex cursor-pointer flex-row items-center justify-center hover:text-gray-200">
        <p className={classes}>{item}</p>
        <p className={classes2}>/&gt;</p>
      </li>
    </Link>
  );
}
