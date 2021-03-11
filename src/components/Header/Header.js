import React, { useEffect, useState } from "react";
import "./Header.css";
import backgroundImg from "../../images/background.jpg";
import League from "../League/League";

const Header = () => {
  const [leagues, setLeagues] = useState([]);
  useEffect(() => {
    const url = "https://www.thesportsdb.com/api/v1/json/1/all_leagues.php";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setLeagues(data.leagues.slice(0, 20)));
  }, []);
  
  
  return (
    <>
      <div class="card bg-dark text-white background-img ">
        <img src={backgroundImg} class="card-img"></img>
        <div class="card-img-overlay header-title">
          <h1>LEAGUE of LEGENDS</h1>
        </div>
      </div>
      <div className="container">
        <div class="row g-5 mt-5 ">
          {leagues.map((league) => (
            <League league={league}></League>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
