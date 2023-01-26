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
  // the restaurantList is the JSON ideally we get using an API Call.
  // If we write the fetch call here in the body itself, the API call is made each time the key change happens.
  // It is not a good place to write the API function.
  useEffect(() => {
    // best way to call an API.
    // This function is called only ONCE after initial render.
    getRestaurants();
  }, []);

  let [isFilterEmpty, setIsFilterEmpty] = useState(false);

  useEffect(() => {
    console.log(
      "Filterred restaurant ListSize: " + filteredRestaurantList?.length
    );
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
    // const json = await response.json();
    const json = await response.json();
    const data = json?.data?.cards[2]?.data?.data?.cards;
    setFilteredRestaurantList(data);
    console.log(data);
    setRestaurantList(data);
  }

  // SUMMARY:
  // [] : useEffect's callback function is called only once AFTER the initial render.
  // [searchTxt] : useEffect's callback function is called once AFTER the initial render, and subsequently after every rerender (when the searchTxt changes).

  // [] : now the useEffect's callback function is called only once, when the page reloads.
  // The callback function is called just ONCE AND AFTER THE INITIAL RENDER IS DONE.
  // [searchTxt] Now useEffect is called when there is a state change in the search text React variable.
  // [] Now useEffect is called only on the 1st page reload.
  // [filteredRestaurantList] Now useEffect's callback function is called only when there is a state change for the filteredRestaurantList variable.
  // So for the above dependency array having filteredRestaurantList the callback function is called only when search is hit.
  // Because only then there is a state change for filteredRestaurantList.
  // [] is the dependency array.
  // useEffect() takes a callback function as parameter.
  // This callback function will be called when useEffect() wants it to be called.
  // Whenever the Body Component re renders, the callback function is called.
  // The Body Component is re rendered when there is a state variable change or props changes.
  // But it is a bad way to call the callback function each time the re render happens.
  // To avoid calling this each time pass a dependency array into it.

  console.log("Body re render");
  // The above console log is called everytime a key change is detected in the input search box.
  // searchTxt is the local state variable
  // we can use the searchTxt variable as a normal variable.
  // We cannot modify the searchTxt local state variable directly like searchTxt = e.target.value
  // We modify the variable only using a function
  if (!restaurantList) {
    // Early return
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
              console.log(searchTxt);
              // setState is asynchronous
              // Good GFG article : https://www.geeksforgeeks.org/is-setstate-method-async/
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
          {/* We will not be able to edit the above input KFC value though */}
          {/* Only the h1 component is re rendered, this is because react used reconcilication and diffing algorithm.
        With this react knows that state of searchClicked go updated so it need to update only the h1.
        Here react just re rendered the h1. This is why react is fast. Look the console for real time demo of reconcilication*/}
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
