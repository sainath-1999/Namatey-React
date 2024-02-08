import { createContext } from "react";

const UserContexts = () =>
  createContext({
    userLogged: "Default User",
  });

export default UserContexts;
