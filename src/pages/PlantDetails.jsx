// import axios from 'axios';
// import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';

const PlantDetails = () => {
  //  const params = useParams();
  // const { id } = useParams();
  // //   console.log(params);
  // const [plant, setPlant] = useState({});

  // useEffect(() => {
  //   // fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
  //   //   .then(res => res.json())
  //   //   .then(data => setPlant(data?.plants));
  //   //fetch data using axios
  //   axios(`https://openapi.programming-hero.com/api/plant/${id}`).then(data =>
  //     setPlant(data.data.plants)
  //   );
  // }, [id]);

  const { data } = useLoaderData();
  // console.log(data.plants);

  const { image, name, category, description, price } = data.plants;

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
        <div className="badge badge-success px-10 h-10 text-lg">{category}</div>
        <h2 className="text-2xl">Price : {price}Tk</h2>
        <p className="text-2xl">{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary text-xl w-48 ">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
export default PlantDetails;
