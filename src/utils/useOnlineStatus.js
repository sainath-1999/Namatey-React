import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus("false");
    });
    window.addEventListener("on line", () => {
      setOnlineStatus("true");
    });
  }, []);
  return onlineStatus;
};

export default useOnlineStatus;
