import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { v4 as uuidv4 } from "uuid";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);
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
    <div className="">
      <h1 className="text-center text-xl bold font-bold">
        {restaurantInfo?.name}
      </h1>
      <div>
        {restaurantMenuDetails.map((details) => {
          return <RestaurantCategory key={uuidv4()} data={details} />;
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
