import { useState } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <img src="" alt="logo" />
      <div className="nav">
        <ul className="nav--links">
          <li> Home </li>
          <li> About </li>
          <li> Contact </li>
          <li> Cart </li>
          <li>
            {isLoggedIn ? (
              <button id="logout__btn" onClick={() => setIsLoggedIn(false)}>Logout</button>
            ) : (
              <button id="login__btn" onClick={() => setIsLoggedIn(true)}>Login</button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
