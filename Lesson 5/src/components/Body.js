import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../config";

const Body = () => {
  let searchTxt = "KFC";
  return (
    <>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search" value={searchTxt} onChange={(e) => {
          console.log(e.target.value);
          console.log(searchTxt);
          searchTxt = e.target.value;
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
