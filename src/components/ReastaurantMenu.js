import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const ReastaurantMenu = () => {
  // *const params = useParams();
  // *we can destructer on the fly and Just have resId directly
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(0);

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[0]?.card?.card?.info;

  const Catagories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log(Catagories);

  return (
    <div className="text-center">
      <h1 className="font-bold text-lg my-6 ">{name}</h1>
      <p className="font-bold text-sm">
        {cuisines} -{costForTwoMessage}
      </p>
      {/* Category list */}

      {Catagories.map((category, index) => (
        //* Controlled Component
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItem={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default ReastaurantMenu;

{
  /* <ul className="te">
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -
            {item.card.info.price / 10 || item.card.info.defaultPrice / 10}
          </li>
        ))}
      </ul> */
}
