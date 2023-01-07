import ReactDOM from "react-dom/client";
import React from "react";

const Title = () => {
  return (
    <h1 id="title" key="h2">
      Food Villa
    </h1>
  );
};

const HeadingComponent = () => {
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
        
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
