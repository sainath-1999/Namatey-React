import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const ReastaurantMenu = () => {
  // *const params = useParams();
  // *we can destructer on the fly and Just have resId directly
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card;
  console.log("item cards", itemCards);

  return (
    <div className="m-4 p-4 bg-slate-100 shadow-lg w-80">
      <h1 className="font-bold text-lg">{name}</h1>
      <p>
        {cuisines} -{costForTwoMessage}
      </p>
      <ul className="te">
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -
            {item.card.info.price / 10 || item.card.info.defaultPrice / 10}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReastaurantMenu;
