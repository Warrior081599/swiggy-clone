import CardContainer, { CardWithPromotedLabel } from "./CardContainer.jsx";
import { useState, useContext } from "react";
import Shimmer from "./Shimmer.jsx";
import { RESTURENT_URL } from "../utils/constants.js";
import { Link } from "react-router-dom";
import useMainResMenu from "../utils/useMainResMenu.js";
import UserContext from "../utils/userContext.js";

const CardMainContainer = () => {
  const [resList, filteredValue, setResList, setFilteredValue] =
    useMainResMenu(RESTURENT_URL);
  const [searchValue, setSearchValue] = useState("");

  const CardPromotedLable = CardWithPromotedLabel(CardContainer);
  const loggedInData = useContext(UserContext);
  const { loggedIn, setUser } = loggedInData;

  //Conditional Rendering : THis is called conditional rendering

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex items-center justify-between ">
        <button
          className="bg-gray-400 flex ml-8 pl-2 pb-1 mt-3 mb-3 rounded-xl w-[200px] h-[30px] hover:border-2 hover:border-black hover:bg-gray-700 hover:text-white hover:border-solid" //We made a button to filter the top rated rersturent that have rating of more than 4 stars
          onClick={() => {
            const output = resList.filter((resturent) => {
              return resturent.info.avgRating > 4.4;
            });

            setResList(output);
          }}
        >
          Filter Top Rated Resturent
        </button>

        {/** Here making the feature when we input the name it will change directly the global context */}
        <div className="mx-4">
          <label htmlFor="input">User Name: </label>
          <input
            type="text"
            id="input"
            className="border border-black"
            value={loggedIn}
            onChange={(e) => setUser(e.target.value)}
          ></input>
        </div>
        <div className="mr-8 flex flex-row mt-4 items-center">
          <input
            className="placeholder-black border-solid border-1 w-[200px] h-[40px] border-black p-1 pl-4 mr-6 rounded-xl bg-gray-100 hover:bg-blue-300 hover:placeholder-white hover:scale-120 hover:duration-300 hover:ease-in-out"
            type="text"
            placeholder="Search the food"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          ></input>
          <button
            className="bg-gray-400 flex ml-2 pl-2 pb-1 mt-3 mb-3 rounded-xl w-[70px] h-[30px] hover:border-2 hover:border-black hover:bg-gray-700 hover:text-white hover:border-solid"
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

      <div className="flex flex-row flex-wrap mt-4 p-4">
        {filteredValue.map((detailsObj) => {
          return (
            <Link
              to={"/restaurant/" + detailsObj?.info?.id}
              key={`${detailsObj.info.id}-${detailsObj.info.name}`}
            >
              {/** Here i need to Render the HOC with promoted tag */}
              {detailsObj?.info?.avgRating > 4.2 ? (
                <CardPromotedLable resData={detailsObj} />
              ) : (
                <CardContainer resData={detailsObj} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CardMainContainer;
