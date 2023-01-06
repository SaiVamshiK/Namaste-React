import React from "react";
import ReactDOM from "react-dom/client";
const heading = (
  <>
    <h1 id="title" key="key1">
      Namaste React
    </h1>
  </>
);
// Above is the JSX which inturn is a React element.
const headingFunction1 = () => (
  <>
    <h1 id="title" key="key2">
      Namaste React Function 1
    </h1>
  </>
);

const HeadingFunction2 = () => (
  <>
    <h1 id="title" key="key3">
      Namaste React Function 2
    </h1>
  </>
);

const HeaderComponent = () => {
  return (
    <>
      {heading}
      {headingFunction1()}
      <HeadingFunction2/>
      {console.log("Inside a Functional Component")}
      <h1>My first Functional Component</h1>
    </>
  );
};
// Above is a Functional Component.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
