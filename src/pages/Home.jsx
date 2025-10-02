import { useLoaderData } from 'react-router';
import Plant from '../components/Plant/Plant';

const Home = () => {
  const { plants } = useLoaderData();

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-11/12 mx-auto md:px-8 gap-6 mt-24">
      {plants.map(plant => (
        <Plant plant={plant} key={plant.id} />
      ))}
    </div>
  );
};

export default Home;
