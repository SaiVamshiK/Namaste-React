import React from "react";
import ReactDOM from "react-dom/client";

// const heading1 = React.createElement('h1',{
//     key : 'key1'
// },'Heading 1');
// const heading2 = React.createElement('h1',{
//     key : 'key2'
// },'Heading 2');
// const heading3 = React.createElement('h1',{
//     key : 'key3'
// },'Heading 3');
// const container = React.createElement('div',{
//     class : 'title'
// },[heading1,heading2,heading3]);
// const container = (
//     <>
//         <div className ='title'>
//             <h1>Heading1</h1>
//             <h1>Heading2</h1>
//             <h1>Heading3</h1>
//         </div>
//     </>
// );

const ContainerComponent = () => {
  return (
    <>
      <div className="title">
        <h1>Heading1</h1>
        <h1>Heading2</h1>
        <h1>Heading3</h1>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ContainerComponent />);
