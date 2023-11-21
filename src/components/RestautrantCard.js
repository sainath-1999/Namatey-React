import { MOCK_URL } from "../utils/constants";
const RestautrantCard = (props) => {
  const { resData } = props;
  const { imageId, name, price, category, ratings } = resData?.card?.info;
  // console.log("props", props);
  return (
    <div className="res-card" style={{ background: "#f0f0f0" }}>
      <img className="res-logo" src={MOCK_URL + imageId} />
      <h3>Name:{name}</h3>
      <h4>Price:{price}</h4>
      <h4>Cusine:{category}</h4>
      <h4>rating:{ratings.aggregatedRating.rating}</h4>
    </div>
  );
};

export default RestautrantCard;
