import { useState } from "react";
import Title from "./Title";

function isLoggedIn() {
  return false;
}

export const Header = () => {
  let [isLogin, setIsLogin] = useState(isLoggedIn());

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {!isLogin ? (
        <>
          <button
            onClick={() => {
              setIsLogin(true);
            }}
          >
            Login
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => {
              setIsLogin(false);
            }}
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
};
