import { useState } from 'react';

import NavBarContainer from '@/components/navbar/container/container';
import NavBarItem from '@/components/navbar/item';
import NavBarLogo from '@/components/navbar/logo';
import type { INavBarItem } from '@/components/navbar/navbar-interface';

const items: INavBarItem[] = [
  { title: 'About Me', offset: -50 },
  { title: 'Experiences', offset: -50 },
  { title: 'Projects', offset: 50 },
  { title: 'Contacts', offset: -50 },
];

const NavBarComponent = () => {
  const [active, setActive] = useState<string>('');

  const isActive = (item: string) => active === item;

  return (
    <NavBarContainer>
      <NavBarLogo setActive={setActive} />

      <NavBarContainer.ItemList>
        {items.map((item) => (
          <NavBarItem
            key={item.title}
            title={item.title}
            offset={item.offset}
            isActive={isActive(item.title)}
            setActive={setActive}
          />
        ))}
      </NavBarContainer.ItemList>
    </NavBarContainer>
  );
};

export default NavBarComponent;
