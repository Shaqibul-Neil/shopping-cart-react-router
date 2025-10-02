import { useContext } from 'react';
import CartContext from '../components/Plant/CartContext/CartContext';
import { Delete } from 'lucide-react';

const Cart = () => {
  const { cart, handleCartItemDelete } = useContext(CartContext);
  // console.log(cart);
  // console.log(handleCartItemDelete);
  const price = cart
    .map(item => item.price)
    .reduce((accu, curr) => accu + curr, 0);
  // console.log(price);
  return (
    <>
      <h2 className="text-center mt-12 text-2xl">Your Cart</h2>
      <h2 className="text-center mt-4 text-xl">Value : {price} Tk</h2>
      <div className="w-11/12 mx-auto grid grid-cols-3 gap-8 min-h-[calc(100vh-285px)] my-16">
        {cart.map(item => (
          <div
            className="p-4 shadow-2xl space-y-3 flex items-center gap-8 h-32"
            key={item.cartId}
          >
            <figure className="w-28 h-16 m-0">
              <img
                src={item.image}
                alt={item.name}
                className="object-cover h-full w-full"
              />
            </figure>
            <div className="flex justify-between items-center gap-12">
              <div>
                <p className="text-xl text-primary font-semibold">
                  {item.name}
                </p>
                <h2 className="text-base flex items-center gap-2">
                  Price : {item.price}Tk
                </h2>
              </div>
              <button
                className="cursor-pointer"
                onClick={() => handleCartItemDelete(item)}
              >
                <Delete />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
