import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../config";

const Body = () => {
  const searchTxt = "KFC";
  return (
    <>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search" value={searchTxt}/>
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
