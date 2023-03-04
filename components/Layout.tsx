import type { ReactElement } from 'react';

import HeadInfo from './Headinfo';
import Nav from './Nav';

interface IProp {
  children: ReactElement;
}

const Layout = ({ children }: IProp) => {
  return (
    <>
      <HeadInfo />
      <Nav />
      <div>{children}</div>
    </>
  );
};

export default Layout;
