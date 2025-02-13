import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (!resMenu) return <Shimmer />;

  //Getting the Restaurant Info then its name

  const restaurantInfo = resMenu?.data?.cards?.find((c) => c?.card?.card?.info)
    ?.card?.card?.info;

  //Here we are getting the Restaurant Menu details and will pass this as prop to "RestaurantCategory" component
  const restaurantMenuDetails = resMenu?.data?.cards
    ?.find((card) => card?.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
      (categoryCard) => categoryCard?.card?.card
    )
    .filter((obj) => obj?.title);

  return (
    <div className="mb-[40px]">
      <h1 className="text-center text-xl bold font-bold">
        {restaurantInfo?.name}
      </h1>
      <div>
        {restaurantMenuDetails.map((details, index) => {
          return (
            //This is now controlled Component
            <RestaurantCategory
              key={uuidv4()}
              data={details}
              showItems={index === showIndex ? true : false}
              setShowIndex={() =>
                setShowIndex((prevIndex) => (prevIndex === index ? -1 : index))
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;

{
  //Regarding setShowIndex prop
  /*//This means that when we will click  again on the same "catergory" it will call the function "setShowIndex" 
  // again and will chceck if the prevIndev and the current index is equal then set the index to -1(collapse all) */
}
