import resList from "../utils/mockData";
import RestautrantCard from "./RestautrantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.062392&lng=77.570698&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log("json", json);
    setReastaurentList(
      json.data.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredReastaurentList(
      json.data.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // * Conditional Rendering json.data.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.cardcostForTwo

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
            className="search"
            onClick={() => {
              const filteredlist = reastaurentList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredReastaurentList(filteredlist);
            }}
          >
            search
          </button>
        </div>

        <button
          className="filter"
          onClick={() => {
            // * Filter the Reastraut cards and update the UI
            // * searchText
            const filteredlist = reastaurentList.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredReastaurentList(filteredlist);
            console.log("reastaruantLinst", reastaurentList);
          }}
        >
          Top Rated Reastaurants
        </button>
      </div>

      <div className="res-container">
        {/* <RestautrantCard resData={resList[0]} /> */}
        {filteredReastaurentlist?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestautrantCard key={restaurant.info.id} resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
