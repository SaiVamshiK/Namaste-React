import ReactDOM from "react-dom/client";
import React from "react";

const Title = () => {
  return (
    <img
      className="logo"
      alt="logo"
      src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
    />
  );
};

const styleObject = {
  color: "blue",
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li style={styleObject}>Home </li>
          <li style={styleObject}>About </li>
          <li style={styleObject}>Contact Us </li>
          <li style={styleObject}>Cart </li>
        </ul>
      </div>
    </div>
  );
};

const config = [
    {
        type : "carousel",
        cards : []
    },
    {
        type : "restuarants",
        cards : [
            {
                image:
                  "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2VyJTIwa2luZ3xlbnwwfHwwfHw%3D&w=1000&q=80",
                name: "Burger King",
                cuisine: ["Burgers", "American"],
                rating: 4.2,
              },
        ]
    },
];

const restaurantList = [
  {
    image:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2VyJTIwa2luZ3xlbnwwfHwwfHw%3D&w=1000&q=80",
    name: "Burger King",
    cuisine: ["Europian", "Asian"],
    rating: 4.2,
  },
  {
    image:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2VyJTIwa2luZ3xlbnwwfHwwfHw%3D&w=1000&q=80",
    name: "Burger King",
    cuisine: ["Japanese", "Chinese"],
    rating: 4.6,
  },
  {
    image:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2VyJTIwa2luZ3xlbnwwfHwwfHw%3D&w=1000&q=80",
    name: "KFC",
    cuisine: ["Indian", "American"],
    rating: 4.9,
  },
  {
    image:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2VyJTIwa2luZ3xlbnwwfHwwfHw%3D&w=1000&q=80",
    name: "Burger King",
    cuisine: ["Burgers", "American"],
    rating: 4.2,
  }
];

const RestaurantCard = (props) => {
    console.log(props)
  return (
    <div className="card">
      <img alt="card" src={props.restaurant.image} />
      <h2>{props.restaurant.name}</h2>
      <h3>{props.restaurant.cuisine.join(", ")}</h3>
      <h4>{props.restaurant.rating} stars</h4>
    </div>
  );
};

// Passing props
const Body = () => {
  return (
    <div className="restaurant-list">
      {restaurantList.map((elem) => <RestaurantCard restaurant={elem}/>)}
    </div>
  );
};

const Footer = () => {
  return (
    <>
      <h4>Footer</h4>
    </>
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
