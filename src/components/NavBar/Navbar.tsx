import { useState } from 'react';

import NavBarContainer from '@/components/navbar/container/container';
import NavBarItem from '@/components/navbar/item';
import NavBarLogo from '@/components/navbar/logo';

const items = ['About Me', 'Experiences', 'Projects', 'Contacts'];

const NavBarComponent = () => {
  const [active, setActive] = useState<string>('');

  const isActive = (item: string) => active === item;

  return (
    <NavBarContainer>
      <NavBarLogo setActive={setActive} />

      <NavBarContainer.ItemList>
        {items.map((item) => (
          <NavBarItem
            key={item}
            title={item}
            isActive={isActive(item)}
            setActive={setActive}
          />
        ))}
      </NavBarContainer.ItemList>
    </NavBarContainer>
  );
};

export default NavBarComponent;
