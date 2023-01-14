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
// Elem 1 is the function to update the variable

// Why state variables?
// If we use normal JS variables let a = 10, now if there is a function that updates this a to 20.
// Then react does not know that the variable got updated and that it has to re render that variable.
// REACT IS NOT AWARE ABOUT ALL OUR JS VARIABLES THAT ARE CREATED.
// So react says everytime we want the variables to be in sync with the UI we need to use the state variables.
// React keeps track of all the state variables.

const Body = () => {
  let a = 10;
  let [searchTxt,setSearchText] = useState('');
  // searchTxt is the local state variable
  // we can use the searchTxt variable as a normal variable.
  // We cannot modify the searchTxt local state variable directly like searchTxt = e.target.value
  // We modify the variable only using a function
  return (
    <>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search" value={searchTxt} onChange={(e) => {
          console.log(e.target.value);
          setSearchText(e.target.value);
        }}/>
        <button className="search-btn" onClick={() => {
          console.log(a);
          a = 20;
        }}>Search - {a}</button>
        {/* We will not be able to edit the above input KFC value though */}
        <h1>{searchTxt}</h1>
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
