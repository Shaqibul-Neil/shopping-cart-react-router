// import axios from 'axios';
// import { useEffect, useState } from 'react';

import { useContext } from 'react';
import { useLocation } from 'react-router';
import CartContext from '../components/Plant/CartContext/CartContext';

const PlantDetails = () => {
  const contextValue = useContext(CartContext);
  console.log(contextValue);
  //  const params = useParams();
  // const { id } = useParams();
  // //   console.log(params);
  // const [plant, setPlant] = useState({});

  //data fetch using router effect
  // useEffect(() => {
  //   //fetch data using axios
  //   axios(`https://openapi.programming-hero.com/api/plant/${id}`).then(data =>
  //     setPlant(data.data.plants)
  //   );
  // }, [id]);

  //data fetch using router axios
  // const { data } = useLoaderData();
  // // console.log(data.plants);
  // const { image, name, category, description, price } = data.plants;
  //data fetch using useLocation state

  const location = useLocation();
  // console.log(location);
  const { image, name, category, description, price } = location?.state || {};
  return (
    <div className="card bg-base-100 w-6/12 mx-auto my-24">
      <figure className="h-96">
        <img
          src={image}
          alt={name}
          className="rounded-xl h-full w-full object-cover"
        />
      </figure>
      <div className="card-body space-y-4">
        <h2 className="card-title text-4xl">{name}</h2>
        <p className="text-2xl">{description}</p>
        <h2 className="text-lg">Category : {category}</h2>
        <h2 className="text-2xl">Price : {price}Tk</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary text-xl w-48 ">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
export default PlantDetails;
