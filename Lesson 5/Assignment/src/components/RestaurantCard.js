const RestaurantCard = (props) => {
  return (
    <>
      <div className="card">
        <img alt="card" src={props.restaurant.image} />
        <h2>{props.restaurant.name}</h2>
        <h3>{props.restaurant.cuisines.join(", ")}</h3>
        <h4>{props.restaurant.rating} stars</h4>
      </div>
    </>
  );
};

export default RestaurantCard;
