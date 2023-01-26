import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Shimmer } from "./ShimmerUI";

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
  let [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  let [restaurantList, setRestaurantList] = useState([]);
  let [searchTxt, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  let [isFilterEmpty, setIsFilterEmpty] = useState(false);

  useEffect(() => {
    if (filteredRestaurantList?.length === 0) {
      setIsFilterEmpty(true);
    } else {
      setIsFilterEmpty(false);
    }
  }, [filteredRestaurantList]);

  async function getRestaurants() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    
    const json = await response.json();
    const data = json?.data?.cards[2]?.data?.data?.cards;
    setFilteredRestaurantList(data);
    console.log(data);
    setRestaurantList(data);
  }

  if (!restaurantList) {
    return null;
  }
  if (restaurantList.length == 0) {
    return (
      <>
        <Shimmer/>
      </>
    );
  } else {
    return (
      <>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            value={searchTxt}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              if (searchTxt !== "") {
                let newRestaurantList = restaurantList.filter((restaurant) => {
                  if (
                    restaurant.data.name
                      .toLowerCase()
                      .includes(searchTxt.toLowerCase())
                  ) {
                    return true;
                  }
                });
                setFilteredRestaurantList(newRestaurantList);
              } else {
                setFilteredRestaurantList(restaurantList);
              }
            }}
          >
            Search
          </button>
        </div>
        <div className="restaurant-list">
          {isFilterEmpty ? (
            <>
              <h1>No restaurants found</h1>
            </>
          ) : (
            filteredRestaurantList.map((restaurant, index) => (
              <RestaurantCard restaurant={restaurant} key={index} />
            ))
          )}
          {}
        </div>
      </>
    );
  }
};
export default Body;
