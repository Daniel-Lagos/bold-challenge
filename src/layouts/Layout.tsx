import { FunctionComponent, ReactNode } from 'react';
import Navbar from '../components/navbar/Navbar';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
