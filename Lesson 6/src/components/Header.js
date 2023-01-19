import { useState } from "react";
import Title from "./Title";
export const Header = () => {
  const [title,setTitle] = useState('Food Villa');
  return (
    <div className="header">
      <Title />
      <h1>{title}</h1>
      <button onClick={() => {
        if(title === 'Food Villa'){
          setTitle("Food Villa Updated")
        }else{
          setTitle("Food Villa")
        }
      }}>Change title</button>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};


