import resList from "../utils/mockData";
import RestautrantCard from "./RestautrantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // * local state variable --- Super powerful variable
  const [reastaurentList, setReastaurentList] = useState([]);

  useEffect(() => {
    fetcheData([]);
  }, []);

  const fetcheData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0825943&lng=80.2707234&restaurantId=37972&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();
    console.log("json", json);
    setReastaurentList(
      json.data.cards[2].groupedCard?.cardGroupMap.REGULAR.cards[5].card.card
        .itemCards
    );
  };

  if (reastaurentList.length === 0) {
    return (
      <div>
        <Shimmer />
      </div>
    );
  }
  return (
    <div className="body">
      <div
        className="filter-btn"
        onClick={() => {
          const filteredlist = reastaurentList.filter(
            (res) => res.card.info.ratings.aggregatedRating.rating > 4
          );
          setReastaurentList(filteredlist);
        }}
      >
        Top Rated Reastaurants
      </div>
      <div className="res-container">
        {/* <RestautrantCard resData={resList[0]} /> */}
        {reastaurentList?.map((restaurant, index) => (
          <RestautrantCard key={index} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
