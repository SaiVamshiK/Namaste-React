const RestaurantCard = ({ restaurant }) => {
  
  const IMG_URL = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+"/"+restaurant?.data?.cloudinaryImageId;
  return (
    <div className="card">
      <img src={IMG_URL} />
      <h2>{restaurant?.data?.name}</h2>
      <h3>{restaurant?.data?.cuisines?.join(", ")}</h3>
      <h4>{restaurant?.data?.avgRating} stars</h4>
    </div>
  );
};
export default RestaurantCard;
