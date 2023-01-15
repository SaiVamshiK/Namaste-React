import React from "react";
import ReactDOM from "react-dom/client";

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
      "https://www.freepnglogos.com/uploads/kfc-png-logo/camera-kfc-png-logo-0.png",
    name: "KFC",
    cuisines: ["Bengali", "Japanese"],
    rating: 4.2,
  },
  {
    image:
      "https://images.picxy.com/cache/2019/9/15/60d73127b256f838b7768474d44f4961.jpg",
    name: "Pista House",
    cuisines: ["American", "Europian"],
    rating: 4.8,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8bl_7LgbfEAa7668wSYn76S9MEDKr6SZdAQ&usqp=CAU",
    name: "Bawarchi",
    cuisines: ["Indian", "Mongolian"],
    rating: 4.8,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqYhIoLyLZutflX8De0aZAXYmvb7BlFSF2tw&usqp=CAU",
    name: "Mehfil",
    cuisines: ["Spanish", "Turkish"],
    rating: 4.8,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYqVgOpEl0pN0kQJjl726iDVx3KoE-RmeMvQ&usqp=CAU",
    name: "Hurger House",
    cuisines: ["Australian", "Nepalian"],
    rating: 4.8,
  },
];

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
    />
  </a>
);

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

const Body = () => {
  return (
    <div className="restaurant-list">
      {restaurantList.map((elem,id) => (
        <RestaurantCard restaurant={elem} key={id} />
      ))}
    </div>
    // Used elem.rating temporarily since it is unique for now.
  );
};

const Footer = () => {
  return (
    <React.Fragment>
      <h1>Footer</h1>
    </React.Fragment>
  );
};

const AppLayout = () => {
  return (
    <React.Fragment>
      {/* Header
              - Logo => Title
              - Navbar Items (Right Side) => Header
              - Cart => Header
          Body
              - Search Bar
              - List of Restaurants (Restaurants Cards)
                  - RestaurantCard
                      - Image
                      - Name of Restaurant
                      - Rating
                      - Cuisines
          Footer
              - Reference Links
              - CopyRights */}
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
