import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="restaurant-list">
      {restaurantList.map((elem, id) => (
        <RestaurantCard restaurant={elem} key={id} />
      ))}
    </div>
  );
};

export default Body;
