interface ContainerProps {
  children: React.ReactNode;
}

const NavBarContainer = ({ children }: ContainerProps) => {
  return (
    <div className="navbar-blur fixed z-50 hidden w-full flex-row flex-wrap items-center justify-between px-3 py-1 md:flex">
      {children}
    </div>
  );
};

const ItemList = ({ children }: ContainerProps) => {
  return (
    <ul className="flex flex-row flex-wrap items-center justify-between gap-2">
      {children}
    </ul>
  );
};

NavBarContainer.ItemList = ItemList;

export default NavBarContainer;
