import type { ReactNode } from 'react';

interface HomeContainerProps {
  children: ReactNode;
}

const HomeContainer = ({ children }: HomeContainerProps) => {
  return <div className="relative">{children}</div>;
};

export default HomeContainer;
