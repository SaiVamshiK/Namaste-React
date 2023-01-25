import { useState } from "react";
import Title from "./Title";

const authenticateUser = () => {
  return false;
}

export const Header = () => {
  const [title,setTitle] = useState('Food Villa');
  const [isLoggedIn,setIsLoggedIn] = useState(authenticateUser());
  return (
    <div className="header">
      {console.log("rerender")}
      <Title />
      {/* <h1>{title}</h1> */}
      {/* <button onClick={() => {
        if(title === 'Food Villa'){
          setTitle("Food Villa Updated")
        }else{
          setTitle("Food Villa")
        }
      }}>Change title</button> */}
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn?<><button onClick={()=>{
        setIsLoggedIn(false);
      }}>Logout</button></>:<><button onClick={() => {
        setIsLoggedIn(true);
      }}>Login</button></>}
    </div>
  );
};


