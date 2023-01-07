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

const RestaurantCard = () => {
  return (
    <div className="card">
      <img
        alt="card"
        src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2VyJTIwa2luZ3xlbnwwfHwwfHw%3D&w=1000&q=80"
      />
      <h2>Burger King</h2>
      <h3>Burgers, American</h3>
      <h4>4.2 stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div>
        <RestaurantCard/>
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
