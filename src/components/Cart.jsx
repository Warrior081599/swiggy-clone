import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { clearCart } from "../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-center font-bold text-2xl m-4 p-4">Cart</div>
      <button
        onClick={handleClick}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl m-2"
      >
        Clear Cart
      </button>

      <div className="w-6/12 mx-auto  ">
        <ItemList key={uuidv4()} data={{ itemCards: cartItems }} />
      </div>
      {cartItems.length === 0 && (
        <p className="font-bold text-lg mt-4">
          Your cart is empty. Please add items to continue.
        </p>
      )}
    </div>
  );
};

export default Cart;
