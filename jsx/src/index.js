// import the react and reactDom libraries

import React from "react";
import ReactDom from "react-dom";

function getButtonText(){
  return 'Click on Me!';
}
//create a react component
const App = () => {
  // const buttonText ='Click Me!';
  return (
     <div>
       <label class="label" for="name">
         Enter name:
       </label>
       <input id="name" type="text"/>
       <br></br>
       <button style={{backgroundColor:'blue',color: 'white'}}>
         {getButtonText()}
       </button>
     </div>    
);
};
// take the react component and show it on screen
ReactDom.render(<App />, document.querySelector("#root"));


