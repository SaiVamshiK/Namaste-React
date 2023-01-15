import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const [searchTxt, setSearchTxt] = useState('');
  const [restaurants,setRestaurants] = useState(restaurantList);
  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={searchTxt}
        onChange={(e) => {
          console.log("hello");
          setSearchTxt(e.target.value);
        }}
      />
      <button onClick={() => {
        console.log("Search text: "+searchTxt);
        const filterRestaurants = restaurantList.filter((restaurant) => {
            if(restaurant.name.includes(searchTxt)){
                return true;
            }
            return false;
        });
        setRestaurants(filterRestaurants);
      }}>Search</button>
      <div className="restaurant-list">
        {restaurants.map((elem, id) => (
          <RestaurantCard restaurant={elem} key={id} />
        ))}
      </div>
    </>
  );
};

export default Body;
