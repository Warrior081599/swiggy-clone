import { v4 as uuidv4 } from "uuid";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const title = data?.title;

  function handleClick() {
    setShowIndex();
  }

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {title} (
            {data?.itemCards ? data.itemCards.length : data?.categories?.length}
            )
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList key={uuidv4()} data={data} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
