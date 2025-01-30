import { useState, useEffect } from "react";

import { RES_MENU } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    const fetchData = async (id) => {
      const response = await fetch(RES_MENU + id);
      const jsonData = await response.json();
      setResMenu(jsonData);
    };
    fetchData(resId);
  }, [resId]);

  return resMenu;
};

export default useRestaurantMenu;
