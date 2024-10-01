import { useState } from 'react';

import NavBarItem from '@/components/NavBar/item';
import NavBarLogo from '@/components/NavBar/logo';

const NavBarComponent = () => {
  const [activeItem, setActiveItem] = useState<string>('');

  function isActive(item: string) {
    return item === activeItem;
  }

  return (
    <div className="navbar-blur fixed z-50 hidden w-full flex-row flex-wrap items-center justify-between px-3 py-1 md:flex">
      <NavBarLogo setActive={setActiveItem} />

      <ul className="flex flex-row flex-wrap items-center justify-between gap-2">
        <NavBarItem
          title="About Me"
          isActive={isActive('About Me')}
          setActive={setActiveItem}
        />
        <NavBarItem
          title="Experiences"
          isActive={isActive('Experiences')}
          setActive={setActiveItem}
        />
        <NavBarItem
          title="Projects"
          isActive={isActive('Projects')}
          setActive={setActiveItem}
        />
        <NavBarItem
          title="Contacts"
          isActive={isActive('Contacts')}
          setActive={setActiveItem}
        />
      </ul>
    </div>
  );
};

export default NavBarComponent;
