import CardContainer from "./CardContainer.jsx";
import { useState, useEffect, use } from "react";
import Shimmer from "./Shimmer.jsx";
import { RESTURENT_URL } from "../utils/constants.js";
import { Link } from "react-router-dom";

const CardMainContainer = () => {
  const [resList, setResList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredValue, setFilteredValue] = useState([]);

  useEffect(() => {
    const URL = RESTURENT_URL;

    const output = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();

        setResList(
          data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );

        setFilteredValue(
          data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      } catch (error) {
        console.log(error);
      }
    };

    output();
  }, []);

  //Conditional Rendering : THis is called conditional rendering

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="main-card-container">
      <div className="filter-container">
        <button
          className="top-rated-btn" //We made a button to filter the top rated rersturent that have rating of more than 4 stars
          onClick={() => {
            const output = resList.filter((resturent) => {
              return resturent.info.avgRating > 4.4;
            });

            setResList(output);
          }}
        >
          Filter Top Rated Resturent
        </button>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search the food"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          ></input>
          <button
            className="search-button"
            onClick={() => {
              const output = resList.filter((resturent) =>
                resturent.info.name
                  .toLowerCase()
                  .includes(searchValue.toLowerCase())
              );

              setFilteredValue(output);
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="multi-card-container">
        {filteredValue.map((detailsObj) => {
          return (
            <Link
              to={"/restaurant/" + detailsObj?.info?.id}
              key={detailsObj?.info?.id}
            >
              <CardContainer resData={detailsObj} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CardMainContainer;
