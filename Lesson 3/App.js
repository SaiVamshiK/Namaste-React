import { createElement as ce} from "react";
import ReactDOM from "react-dom/client";
const heading1 = ce('h1',{
    id : 'heading1',
    key : 'key1'
},'Heading 1');
const heading2 = ce('h1',{
    id : 'heading2',
    key : 'key2'
},'Heading 2');
console.log(heading1);
const container = ce('div',{
    id : 'container'
},[heading1,heading2]);
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log('hello');
root.render(container);