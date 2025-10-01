const Plant = ({ plant }) => {
  const { id, image, name, description, category, price } = plant;
  return (
    <div className="card bg-base-100 shadow-2xl ">
      <figure className="h-48">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </figure>
      <div className="card-body space-y-2">
        <h2 className="card-title">
          {name}
          <div className="badge badge-success">{category}</div>
        </h2>
        <h2 className="text-2xl">Price: {price}Tk</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View Details</button>
          <button className="btn btn-primary">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Plant;
