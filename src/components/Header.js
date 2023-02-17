import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/userContext";


const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const {user} = useContext(UserContext)
  return (
    <div className="header">
      <a href="/">
        <img src="" alt="logo" />
      </a>
      <div className="nav">
        <ul className="nav--links">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/gmart">
            <li>G-Mart</li>
          </Link>
          <li> Cart </li>
          <li>
            <span className="mr-3 font-semibold">{user.name}</span>
            {isLoggedIn ? (
             
              <button className="mx-2" id="logout__btn" onClick={() => setIsLoggedIn(false)}>
                Logout
              </button>
            ) : (
              <button id="login__btn" onClick={() => setIsLoggedIn(true)}>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
