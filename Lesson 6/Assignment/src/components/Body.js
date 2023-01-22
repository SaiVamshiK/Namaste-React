import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../config";
import { useState } from "react";

const Body = () => {
  let [searchTxt, setSearchText] = useState("");
  let [filteredRestaurantList, setFilteredRestaurantList] =
    useState(restaurantList);
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
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            if (searchTxt !== "") {
              let newRestaurantList = restaurantList.filter((restaurant) => {
                if (restaurant.name.includes(searchTxt)) {
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
        {filteredRestaurantList.map((restaurant, index) => (
          <RestaurantCard restaurant={restaurant} key={index} />
        ))}
      </div>
    </>
  );
};
export default Body;
