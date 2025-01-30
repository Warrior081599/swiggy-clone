import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { v4 as uuidv4 } from "uuid";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);
  if (!resMenu) return <Shimmer />;

  const restaurantInfo = resMenu?.data?.cards?.find((c) => c?.card?.card?.info)
    ?.card?.card?.info;

  const getMenuItems = () => {
    // Extract itemCards
    const itemCards = resMenu?.data?.cards
      ?.flatMap((card) => card?.groupedCard?.cardGroupMap?.REGULAR?.cards || [])
      ?.flatMap(
        (regularCard) =>
          regularCard?.card?.card?.itemCards?.map((item) => item?.card?.info) ||
          []
      )
      ?.flat();

    if (itemCards?.length > 0) return itemCards;

    // Extract variantGroups
    const variantGroups = resMenu?.data?.cards
      ?.find((c) => c?.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
        (c) => c?.card?.card?.itemCards?.[0]?.card?.info?.variantsV2
      )?.card?.card?.itemCards?.[0]?.card?.info?.variantsV2?.variantGroups;

    return variantGroups?.flatMap((g) => g?.variations || []) || [];
  };

  const menuItems = getMenuItems().filter((item) => item?.id && item?.name);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{restaurantInfo?.name}</h1>
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li
            key={uuidv4()}
            className="flex justify-between items-center p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-300"
          >
            <span>{item.name}</span>
            <span className="font-semibold text-gray-700">
              ₹{(item.price || 0) / 100}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
