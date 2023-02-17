import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Viraj",
    email: "viraj@gmail.com",
  },
});

export default UserContext;
