import { useState, useEffect } from "react";

const useModel = () => {
  const [state, setState] = useState(true);
  useEffect(() => {
    window.addEventListener("false", () => {
      setState("offline");
    });
    window.addEventListener("true", () => {
      setState("online");
    });
  });
  return state;
};

export default useModel;
