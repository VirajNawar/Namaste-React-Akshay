import React from "react";
import ReactDOM  from "react-dom/client";


const Title = () =>{
 return (
  <h1>Namaste React !</h1>
 )  
}

const Header = () =>{
  return (
    <div>
      <Title />
      <h3>Namaste React is kool !</h3>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Header);
