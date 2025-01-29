import { useState, useEffect } from "react";
import { RES_MENU } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  let { resId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(RES_MENU + resId);
      const jsonData = await response.json();
      setResMenu(jsonData);
    };
    fetchData();
  }, [resId]);

  if (!resMenu) return <Shimmer />;

  // 1. Find restaurant info (common for all API types)
  const restaurantInfo = resMenu?.data?.cards?.find((c) => c?.card?.card?.info)
    ?.card?.card?.info;

  // 2. Universal menu item extraction
  const getMenuItems = () => {
    // First check for direct itemCards (Dosa case)
    const itemCards = resMenu?.data?.cards
      ?.flatMap((card) => card?.groupedCard?.cardGroupMap?.REGULAR?.cards || [])
      ?.flatMap((regularCard) => regularCard?.card?.card?.itemCards || [])
      ?.map((item) => item?.card?.info);

    // If found, return them
    if (itemCards?.length > 0) return itemCards;

    // Fallback to variantsV2 approach
    const variantGroups = resMenu?.data?.cards
      ?.find((c) => c?.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
        (c) => c?.card?.card?.itemCards?.[0]?.card?.info?.variantsV2
      )?.card?.card?.itemCards?.[0]?.card?.info?.variantsV2?.variantGroups;

    return variantGroups?.flatMap((g) => g?.variations) || [];
  };

  const menuItems = getMenuItems();

  return (
    <div>
      <h1>{restaurantInfo?.name}</h1>
      <ul>
        {menuItems.map((item) => (
          <li key={item?.id}>
            {item?.name} - ₹{(item?.price || 0) / 100}{" "}
            {/* Convert paise to rupees */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
