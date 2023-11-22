import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
const ReastaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  // const params = useParams();
  // *we can destructer on the fly and kust have resId directly
  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setResInfo(json.data);
    console.log("resInfo", resInfo);
  };
  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card;
  console.log("item cards", itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines} -{costForTwoMessage}
      </p>
      <ul>
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
