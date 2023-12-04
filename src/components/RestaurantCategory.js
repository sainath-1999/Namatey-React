import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data, showItem, setShowIndex }) => {
  //const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {/* Header*/}
      <div className="w-6/12 bg-gray-100 shadow-lg mx-auto my-4 p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data?.title}({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {/* Acocordien body */}
        {showItem && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
