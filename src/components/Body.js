import RestautrantCard, { withPromtedStatus } from "./RestautrantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // * local state variable --- Super powerful variable
  const [reastaurentList, setReastaurentList] = useState([]);
  const [filteredReastaurentlist, setFilteredReastaurentList] = useState([]); // another copy

  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  const RestraurantCardStatus = withPromtedStatus(RestautrantCard);

  useEffect(() => {
    fetcheData([]);
  }, []);
  // console.log("body rendered");

  const fetcheData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.062392&lng=77.570698&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.062392&lng=77.570698&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // {
      //   body: JSON.stringify({
      //     lat: "12.9848397",
      //     lng: "77.7550999",
      //   }),
      // }
    );

    const json = await data.json();
    // console.log("json", json);
    setReastaurentList(
      json.data.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredReastaurentList(
      json.data.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log("restaurantListt", reastaurentList);
  };

  if (onlineStatus === "false") {
    return <h1>Your are offline please check your connection!!!</h1>;
  }

  // * Conditional Rendering
  if (reastaurentList?.length === 0) return <Shimmer />;
  //reastaurentList?.length === 0 ? (<shimmer />

  return (
    <div className="body">
      <div className="filter-btn flex">
        <div className="search  m-4 p-4 space-x-1">
          <input
            type="text"
            className="border border-solid border-black"
            placeholder="enter the value"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search px-4 bg-green-200 rounded-lg "
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
        <div className="search  m-4 p-4 space-x-1">
          <button
            className="filter px-4 bg-gray-200 rounded-lg "
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
      </div>

      <div className="flex flex-wrap">
        {/* <RestautrantCard resData={resList[0]} /> */}
        {filteredReastaurentlist?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <RestraurantCardStatus resData={restaurant} />
            ) : (
              <RestautrantCard resData={restaurant} />
            )}
            {/* <RestautrantCard key={restaurant.info.id} resData={restaurant} /> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
