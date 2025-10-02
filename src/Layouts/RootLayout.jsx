import { Outlet, useNavigation } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';

const RootLayout = () => {
  //use navigation hook eta bole je je route e jawar try krtesi oi route e data load hsse kina
  const navigation = useNavigation();
  // console.log(navigation.state);
  return (
    <>
      <header className="w-11/12 mx-auto px-2">
        <Navbar />
      </header>
      {navigation.state === 'loading' ? (
        <LoadingSpinner />
      ) : (
        <main>
          <Outlet />
        </main>
      )}

      <footer className="bg-base-300 text-base-content p-10">
        <Footer />
      </footer>
    </>
  );
};

export default RootLayout;
