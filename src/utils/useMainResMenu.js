import { useState, useEffect } from "react";

const useMainResMenu = (URL) => {
  const [resList, setResList] = useState([]);

  const [filteredValue, setFilteredValue] = useState([]);

  useEffect(() => {
    const output = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();

        setResList(
          data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || []
        );

        setFilteredValue(
          data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || []
        );
      } catch (error) {
        console.log(error);
      }
    };

    output();
  }, [URL]);
  return [resList, filteredValue, setResList, setFilteredValue];
};

export default useMainResMenu;
