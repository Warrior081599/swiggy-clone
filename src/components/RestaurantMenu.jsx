import { useState, useEffect } from "react";
import { RES_MENU } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null); // null = loading state

  let { resId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(RES_MENU + resId);
      const jsonData = await response.json();
      setResMenu(jsonData);
    };
    fetchData();
  }, []);

  if (!resMenu) return <Shimmer />;

  // 1. Find restaurant info dynamically
  const restaurantInfo = resMenu?.data?.cards?.find((c) => c?.card?.card?.info)
    ?.card?.card?.info;

  // 2. Find menu data dynamically
  const menuData = resMenu?.data?.cards?.find(
    (c) => c?.groupedCard
  )?.groupedCard;

  // 3. Find first valid item card
  const regularCards = menuData?.cardGroupMap?.REGULAR?.cards || [];
  const variantData = regularCards.find(
    (c) => c?.card?.card?.itemCards?.[0]?.card?.info?.variantsV2
  );

  // 4. Get variations
  const variations =
    variantData?.card?.card?.itemCards?.[0]?.card?.info?.variantsV2?.variantGroups?.flatMap(
      (g) => g?.variations
    ) || [];

  return (
    <div>
      <h1>{restaurantInfo?.name}</h1>
      <ul>
        {variations.map((item) => (
          <li key={item.id}>
            {item.name} - ₹{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
