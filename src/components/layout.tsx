import { Outlet } from 'react-router-dom';
import Header from './header';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="grow container mx-auto p-4 md:p-6 lg:p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
