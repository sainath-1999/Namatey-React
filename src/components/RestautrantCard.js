import { MOCK_URL } from "../utils/constants";
const RestautrantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, costForTwo, cuisines, avgRating } =
    resData?.info;
  // console.log("props", props);
  return (
    <div className="res-card" style={{ background: "#f0f0f0" }}>
      <img className="res-logo" src={MOCK_URL + cloudinaryImageId} />
      <h3>Name:{name}</h3>
      <h4>Price:{costForTwo}</h4>
      <h4>Cusine:{cuisines.join(",")}</h4>
      <h4>rating:{avgRating}</h4>
    </div>
  );
};

export default RestautrantCard;
