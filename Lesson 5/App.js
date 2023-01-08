import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
      />
    </a>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const restaurantList = [
  {
    image:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2VyJTIwa2luZ3xlbnwwfHwwfHw%3D&w=1000&q=80",
    name: "Burger King",
    cuisines: ["Indian", "Chinese"],
    rating: 4.4,
  },
  {
    image:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2VyJTIwa2luZ3xlbnwwfHwwfHw%3D&w=1000&q=80",
    name: "KFC",
    cuisines: ["Bengali", "Japanese"],
    rating: 4.2,
  },
  {
    image:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2VyJTIwa2luZ3xlbnwwfHwwfHw%3D&w=1000&q=80",
    name: "Pista House",
    cuisines: ["American", "Europian"],
    rating: 4.8,
  },
];

const RestaurantCard = ({restaurant}) => {
  return (
    <div className="card">
      <img
        src={restaurant.image}
      />
      <h2>{restaurant.name}</h2>
      <h3>{restaurant.cuisines.join(', ')}</h3>
      <h4>{restaurant.rating} stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurant-list">
      {restaurantList.map((restaurant,index) => <RestaurantCard restaurant={restaurant} key={index}/>)}
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <h1>Footer</h1>
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
