import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../config";

const Body = () => {
  return (
    <div className="restaurant-list">
      {restaurantList.map((restaurant, index) => (
        <RestaurantCard restaurant={restaurant} key={index} />
      ))}
    </div>
  );
};
export default Body;
