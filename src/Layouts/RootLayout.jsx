import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const RootLayout = () => {
  return (
    <>
      <header className="w-11/12 mx-auto px-2">
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="bg-base-300 text-base-content p-10">
        <Footer />
      </footer>
    </>
  );
};

export default RootLayout;
