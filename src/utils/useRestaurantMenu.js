// * First Custom Hook by me
import { useEffect } from "react";
import { MENU_API } from "./constants";
import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId); // MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER"
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
