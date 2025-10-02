import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router';
import CartContext from './CartContext/CartContext';

const Plant = ({ plant }) => {
  const { setCart } = useContext(CartContext);

  //button die data send
  const navigate = useNavigate();
  // console.log(navigate);
  const { id, image, name, category, price } = plant;
  return (
    <div className="card bg-base-100 shadow-2xl">
      <figure className="h-48">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </figure>
      <div className="card-body space-y-2">
        <div className="flex items-center gap-4">
          <h2 className="card-title">{name}</h2>
          <div className="badge badge-success">{category}</div>
        </div>

        <h2 className="text-2xl">Price : {price}Tk</h2>
        <div className="card-actions justify-end">
          <NavLink
            state={plant}
            to={`/plant-details/${id}`}
            className="btn btn-primary"
          >
            View Details
          </NavLink>
          <button
            className="btn btn-warning"
            onClick={() => navigate(`/plant-details/${id}`, { state: plant })}
          >
            View Details with Button
          </button>
          <button
            className="btn btn-primary"
            onClick={() =>
              setCart(prev => [
                ...prev,
                { ...plant, cartId: crypto.randomUUID() },
              ])
            }
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plant;
