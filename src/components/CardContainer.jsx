import { IMG_URL } from "../utils/constants";

const CardContainer = (props) => {
  const { resData } = props;

  const {
    id,
    name,
    cloudinaryImageId,
    avgRatingString,
    cuisines,
    areaName,
    sla,
  } = resData.info;

  return (
    <div className=" w-[250px] h-auto p-3 m-3 bg-gray-100 rounded-lg hover:bg-gray-400 hover:shadow-2xl hover:text-white hover:scale-105 hover:duration-300 hover:ease-in-out">
      <img
        className=" justify-center rounded-lg w-auto h-auto p-2 mx-auto"
        src={IMG_URL + cloudinaryImageId}
        alt="food-card"
      ></img>
      <div className="m-1 flex-row ">
        <span className="font-bold block ">{name}</span>
        <h4 className="font-medium">({cuisines.join(" , ")})</h4>
        <h4>{avgRatingString} ⭐</h4>
        <h4>{areaName}</h4>
        <h4 className="font-medium">{sla.deliveryTime} Mins 🏍️ </h4>
      </div>
    </div>
  );
};

//HOC is a Component which takes another componet as argument, enhance it and return a enhanced component

/* Creating  HOC */

export const CardWithPromotedLabel = (CardContainer) => {
  return (props) => {
    return (
      <div>
        <label className="bg-black rounded-lg text-white absolute p-2 mx-3">
          Promoted
        </label>
        <CardContainer {...props} />
      </div>
    );
  };
};

export default CardContainer;
