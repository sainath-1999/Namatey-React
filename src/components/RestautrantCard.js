import { MOCK_URL } from "../utils/constants";
const RestautrantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, costForTwo, cuisines, avgRating } =
    resData?.info;
  // console.log("props", props);
  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 hover:bg-slate-300 rounded-lg">
      <img className="rounded-lg" src={MOCK_URL + cloudinaryImageId} />
      <h3 className="font-bold py-2 text-lg">Name:{name}</h3>
      <h4>Price:{costForTwo}</h4>
      <h4>{cuisines.join(",")}</h4>
      <h4>rating:{avgRating}</h4>
    </div>
  );
};

export default RestautrantCard;
