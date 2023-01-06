import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement('h1',{
    key : 'key1'
},'Heading 1');
const heading2 = React.createElement('h1',{
    key : 'key2'
},'Heading 2');
const heading3 = React.createElement('h1',{
    key : 'key3'
},'Heading 3');
const container = React.createElement('div',{
    class : 'title'
},[heading1,heading2,heading3]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container)