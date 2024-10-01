import { useState } from 'react';

import NavBarItem from '@/components/navbar/item';
import NavBarLogo from '@/components/navbar/logo';

const items = ['About Me', 'Experiences', 'Projects', 'Contacts'];

const NavBarComponent = () => {
  const [active, setActive] = useState<string>('');

  const isActive = (item: string) => active === item;

  return (
    <div className="navbar-blur fixed z-50 hidden w-full flex-row flex-wrap items-center justify-between px-3 py-1 md:flex">
      <NavBarLogo setActive={setActive} />

      <ul className="flex flex-row flex-wrap items-center justify-between gap-2">
        {items.map((item) => (
          <NavBarItem
            key={item}
            title={item}
            isActive={isActive(item)}
            setActive={setActive}
          />
        ))}
      </ul>
    </div>
  );
};

export default NavBarComponent;
