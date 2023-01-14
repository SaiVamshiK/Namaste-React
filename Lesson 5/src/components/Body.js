import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../config";
import { useState } from "react";

// What is state
// Whenever we create a local variables we use state variables.
// State variables are created using useState hooks.

// What is Hooks
// Hooks is just a JS function.
// we get useState from react

// What is useState
// The function is this useState hook is to create state variables.
// useState() returns the array
// Elem 0 is the variable name
//

const Body = () => {
  const [searchTxt] = useState("KFC");
  // searchTxt is the local state variable
  // we can use the searchTxt variable as a normal variable.
  return (
    <>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search" value={searchTxt} onChange={(e) => {
          console.log(e.target.value)
        }}/>
        <button className="search-btn">Search</button>
        {/* We will not be able to edit the above input KFC value though */}
      </div>
      <div className="restaurant-list">
        {restaurantList.map((restaurant, index) => (
          <RestaurantCard restaurant={restaurant} key={index} />
        ))}
      </div>
    </>
  );
};
export default Body;
