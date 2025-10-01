import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PlantDetails = () => {
  //  const params = useParams();
  const { id } = useParams();
  //   console.log(params);
  const [plant, setPlant] = useState({});

  useEffect(() => {
    // fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
    //   .then(res => res.json())
    //   .then(data => setPlant(data?.plants));
    //fetch data using axios
  }, [id]);

  const { image, name, category, description, price } = plant;

  return (
    <div className="card bg-base-100 w-6/12 mx-auto shadow-sm">
      <figure className="px-10 pt-10 h-96">
        <img
          src={image}
          alt={name}
          className="rounded-xl h-full w-full object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <div className="badge badge-success">{category}</div>
        <h2 className="text-2xl">Price: {price}Tk</h2>
        <p>{description}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
