import React from "react";
import './Header.css'
import backgroundImg from '../../images/resize.png'
const Header = () => {
  return (
    <div>
      <div className="background-img">
      <img src={backgroundImg} class="img-fluid" alt="..."></img>
      </div>
   
      <div>
          <h1>dsflk</h1>
      </div>
    </div>
  );
};

export default Header;
