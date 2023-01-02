const heading = React.createElement(
  "h1",
  {
    id: "heading",
    className: "class1",
  },
  "Hello World"
);
console.log(heading);
// React element "heading" is a JS object
const root = ReactDOM.createRoot(document.getElementById("root"));
// We tell React what is our root element
// Generally we have one root in our React app
root.render(heading);
