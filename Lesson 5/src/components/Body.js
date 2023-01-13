import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../config";

const Body = () => {
  return (
    <>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search" value=""/>
        <button className="search-btn">Search</button>
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
