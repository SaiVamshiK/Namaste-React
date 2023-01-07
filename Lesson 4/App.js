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
    <div>
      <Title />
      <h1>Heading</h1>
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
