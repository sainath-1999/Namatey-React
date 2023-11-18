import resList from "../utils/mockData";
import RestautrantCard from "./RestautrantCard";
import { useState } from "react";
const Body = () => {
  // * local state variable --- Super powerful variable
  const [reastaurentList, setReastaurentList] = useState(resList);
  return (
    <div className="body">
      <div
        className="filter-btn"
        onClick={() => {
          const filteredlist = reastaurentList.filter(
            (res) => res.info.avgRating > 4
          );
          setReastaurentList(filteredlist);
        }}
      >
        Top Rated Reastaurants
      </div>
      <div className="res-container">
        {/* <RestautrantCard resData={resList[0]} /> */}
        {reastaurentList.map((restaurant) => (
          <RestautrantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
