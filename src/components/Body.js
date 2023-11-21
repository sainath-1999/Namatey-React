import resList from "../utils/mockData";
import RestautrantCard from "./RestautrantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // * local state variable --- Super powerful variable
  const [reastaurentList, setReastaurentList] = useState([]);
  const [filteredReastaurentlist, setFilteredReastaurentList] = useState([]); // another copy

  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetcheData([]);
  }, []);
  console.log("body rendered");

  const fetcheData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0825943&lng=80.2707234&restaurantId=37972&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();
    console.log("json", json);
    setReastaurentList(
      json.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card
        ?.card?.itemCards
    );
    setFilteredReastaurentList(
      json.data.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card
        ?.card?.itemCards
    );
  };

  // * Conditional Rendering
  return reastaurentList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter-btn">
        <div className="search">
          <input
            type="text"
            placeholder="enter the value"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const filteredlist = reastaurentList.filter((res) =>
                res.card.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredReastaurentList(filteredlist);
            }}
          >
            search
          </button>
        </div>
        <div className="filter">
          <button
            onClick={() => {
              // * Filter the Reastraut cards and update the UI
              // * searchText
              const filteredlist = reastaurentList.filter(
                (res) => res.card.info.ratings.aggregatedRating.rating > 4
              );
              reastaurentList(filteredlist);
            }}
          >
            Top Rated Reastaurants
          </button>
        </div>
      </div>

      <div className="res-container">
        {/* <RestautrantCard resData={resList[0]} /> */}
        {filteredReastaurentlist?.map((restaurant, index) => (
          <RestautrantCard key={restaurant.card.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
