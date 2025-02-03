import { v4 as uuidv4 } from "uuid";
import { IMG_URL } from "../utils/constants";

const ItemList = ({ data }) => {
  return (
    <div>
      <div>
        {data?.itemCards ? (
          data?.itemCards?.map((itemCard) => {
            const { name, description, imageId } = itemCard.card.info;
            return (
              <div
                key={uuidv4()}
                className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
              >
                <div className="w-9/12">
                  <div className="py-2">
                    <span className="font-bold text-lg">{name}</span>
                    <span>
                      {" "}
                      - ₹
                      {itemCard.card.info.defaultPrice / 100 ||
                        itemCard.card.info.price / 100}
                    </span>
                  </div>
                  <p className="text-xs">{description}</p>
                </div>
                <div className="w-3/12 p-4 relative">
                  <div className="absolute inset-x-0 top-0 flex justify-center">
                    <button className="p-2 rounded-lg bg-black text-white shadow-lg">
                      Add +
                    </button>
                  </div>
                  <img
                    src={IMG_URL + imageId}
                    alt="dish-img"
                    className="w-full rounded-lg "
                  />
                </div>
              </div>
            );
          })
        ) : (
          <div>
            {data?.categories?.map((subCategory) => (
              <div key={subCategory.categoryId} className="mt-2">
                <span className="font-bold">{subCategory.title}</span>
                <div>
                  {subCategory.itemCards.map((itemCard) => {
                    const { name, description, imageId } = itemCard.card.info;
                    return (
                      <div
                        key={uuidv4()}
                        className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
                      >
                        <div className="w-9/12">
                          <div className="py-2">
                            <span className="font-bold">{name}</span>
                            <span>
                              {" "}
                              - ₹
                              {itemCard.card.info.defaultPrice / 100 ||
                                itemCard.card.info.price / 100}
                            </span>
                          </div>
                          <p className="text-xs">{description}</p>
                        </div>
                        <div className="w-3/12 p-4 relative">
                          <div className="absolute inset-x-0 top-0 flex justify-center">
                            <button className="p-2 rounded-lg bg-black text-white shadow-lg">
                              Add +
                            </button>
                          </div>
                          <img
                            src={IMG_URL + imageId}
                            alt="dish-img"
                            className="w-full"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemList;
