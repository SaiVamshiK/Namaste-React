import RestaurantCard from "./RestaurantCard";
import { ShimmerUi } from "./ShimmerUI";
import { CDN_URL } from "../config";
import { useEffect, useState } from "react";

const Body = () => {
  let [searchTxt, setSearchText] = useState("");
  let [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  let [allRestaurants, setAllRestaurants] = useState([]);
  let [isFilteredRestautantsEmpty, setIsFilteredRestautantsEmpty] =
    useState(true);

  if(!allRestaurants || !filteredRestaurantList){
    return null;
  }
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(CDN_URL);
    const json = await data.json();
    const restaurants = json?.data?.cards[2]?.data?.data?.cards;
    setAllRestaurants(restaurants);
    setFilteredRestaurantList(restaurants);
    if (restaurants.length !== 0) {
      setIsFilteredRestautantsEmpty(false);
    }else{
        setIsFilteredRestautantsEmpty(true);
    }
  }

  return allRestaurants.length === 0 ? (
    <ShimmerUi />
  ) : (
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
            setIsFilteredRestautantsEmpty(false);
            if (searchTxt.length !== 0) {
              let newFilteredRestaurantList = allRestaurants.filter(
                (restaurant) => {
                  if (
                    restaurant.data.name
                      .toLowerCase()
                      .includes(searchTxt.toLowerCase())
                  ) {
                    return true;
                  }
                }
              );
              
              setFilteredRestaurantList(newFilteredRestaurantList);
              if(newFilteredRestaurantList.length === 0){
                setIsFilteredRestautantsEmpty(true);
              }
            } else {
              setFilteredRestaurantList(allRestaurants);
            }
          }}
        >
          Search
        </button>
      </div>
      {isFilteredRestautantsEmpty ? (
        <>
            <h1>No restaurants Found</h1>
        </>
      ) : (
        <div className="restaurant-list">
          {filteredRestaurantList.map((restaurant, id) => {
            return <RestaurantCard restaurant={restaurant} key={id} />;
          })}
        </div>
      )}
    </>
  );
};
export default Body;
