import ReactDOM from "react-dom/client";
import React from "react";

const Title = () => {
  return (
    <img className="logo" alt="logo" src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"/>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
            <li>Home </li>
            <li>About </li>
            <li>Contact Us </li>
            <li>Cart </li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
    return (
        <>
        <h4>Body</h4>
        </>
    );
}

const Footer = () => {
    return (
        <>
        <h4>Footer</h4>
        </>
    );
}

const AppLayout = () => {
  return (
    <>
        {/* Header
            - Logo
            - Navbar Items (Right Side)
            - Cart 
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
        <Header/> 
        <Body/>
        <Footer/>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
