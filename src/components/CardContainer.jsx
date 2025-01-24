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
    <div className="single-card-container">
      <span className="food-name">{name}</span>
      <img
        className="food-image-single"
        src={IMG_URL + cloudinaryImageId}
        alt="food-card"
      ></img>
      <h4>{cuisines.join(" , ")}</h4>
      <h4>{avgRatingString} Stars</h4>
      <h4>{areaName}</h4>
      <h4>{sla.deliveryTime} Mins</h4>
    </div>
  );
};

export default CardContainer;
