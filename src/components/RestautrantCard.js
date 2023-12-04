import { MOCK_URL } from "../utils/constants";
const RestautrantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, costForTwo, cuisines, avgRating } =
    resData?.info;
  // console.log("props", props);
  return (
    <div
      className="m-4 p-4 w-[250px] bg-gray-100 hover:bg-slate-300 rounded-lg text-ellipsis
     overflow-hidden whitespace-nowrap h-100"
    >
      <img
        className="rounded-lg h-24 max-w-2xl"
        src={MOCK_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">Name:{name}</h3>
      <h4>Price:{costForTwo}</h4>
      <h4>{cuisines.join(",")}</h4>
      <h4>rating:{avgRating}</h4>
    </div>
  );
};

// * Higher order component
// * input  - RestaurantCard ==>> RestaurantCardPromoted\

export const withPromtedStatus = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="m-1 p-2 bg-violet-400 text-white rounded-lg absolute">
          Online
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestautrantCard;
