import { v4 as uuidv4 } from "uuid";
import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data }) => {
  const [showItemList, setShoItemList] = useState(false);

  const title = data?.title;
  console.log(data);

  const handleClick = () => {
    setShoItemList(!showItemList);
  };

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
        {showItemList && <ItemList key={uuidv4()} data={data} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
