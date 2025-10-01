import { useLoaderData } from 'react-router';
import Plant from '../components/Plant/Plant';

const Home = () => {
  const { plants } = useLoaderData();

  return (
    <div className="grid grid-cols-3 w-11/12 mx-auto px-8 my-12 gap-6">
      {plants.map(plant => (
        <Plant plant={plant} key={plant.id} />
      ))}
    </div>
  );
};

export default Home;
