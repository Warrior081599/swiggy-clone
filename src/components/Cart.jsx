import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { v4 as uuidv4 } from "uuid";

//NOW WE WILL RE-USE OUR ITEM-LIST

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div>
      <div className="text-center font-bold text-2xl m-4 p-4">Cart</div>
      <ItemList key={uuidv4()} data={{ itemCards: cartItems }} />;
    </div>
  );
};

export default Cart;
