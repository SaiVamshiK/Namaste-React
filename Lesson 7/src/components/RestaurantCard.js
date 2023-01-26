import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({ restaurant }) => {
  if (restaurant.isShimmer) {
    {console.log("In shimmer")}
    return (<div className="card">
      <img src="" />
      <h2>---</h2>
      <h3>---</h3>
      <h4>---</h4>
    </div>);
  } else {
    const URL = IMG_CDN_URL + restaurant.data.cloudinaryImageId;
    return (
      <div className="card">
        <img src={URL} />
        <h2>{restaurant.data.name}</h2>
        <h3>{restaurant?.data?.cuisines?.join(", ")}</h3>
        <h4>{restaurant.data.avgRating} stars</h4>
      </div>
    );
  }
};
export default RestaurantCard;
