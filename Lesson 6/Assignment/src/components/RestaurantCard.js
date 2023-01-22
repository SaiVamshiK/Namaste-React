const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="card">
      <img src={restaurant.image} />
      <h2>{restaurant.name}</h2>
      <h3>{restaurant.cuisines.join(", ")}</h3>
      <h4>{restaurant.rating} stars</h4>
    </div>
  );
};
export default RestaurantCard;
