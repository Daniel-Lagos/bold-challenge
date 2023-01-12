import { FunctionComponent, ReactNode } from 'react';
import Navbar from '../components/navbar/Navbar';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
