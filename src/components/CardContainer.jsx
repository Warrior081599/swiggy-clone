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
    <div className="w-[300px] h-[510px] p-3 m-3 bg-gray-100 rounded-2xl hover:bg-gray-400 hover:text-white hover:scale-105 hover:duration-300 hover:ease-in-out">
      <span className="font-bold mb-[10px] block">{name}</span>
      <img
        className="rounded-2xl w-[250] h-[300] ml-3"
        src={IMG_URL + cloudinaryImageId}
        alt="food-card"
      ></img>
      <div className="m-1 font-bold ">
        <h4 className="bg-gray-300 rounded-lg px-4 my-2 hover:text-black hover:bg-amber-50">
          {cuisines.join(" , ")}
        </h4>
        <h4>{avgRatingString} Stars</h4>
        <h4>{areaName}</h4>
        <h4>{sla.deliveryTime} Mins</h4>
      </div>
    </div>
  );
};

export default CardContainer;
