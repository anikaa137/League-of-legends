import React, { useEffect, useState } from "react";
import './Header.css'
import backgroundImg from '../../images/resize.png';
import League from "../League/League";

const Header = () => {
 const [leagues, setLeagues] = useState([]);
 useEffect(()=>{
   const url = "https://www.thesportsdb.com/api/v1/json/1/all_leagues.php"
   fetch(url)
   .then(res=>res.json())
   .then(data=>setLeagues(data.leagues.slice(0,20)))
 },[])
//  console.log(leagues)
  return (
    <>
      <div className="background-img">
        <img src={backgroundImg} class="img-fluid" alt="..."></img>
      </div>
     <div className="container">
     <div class="row g-5 mt-5 ">
     {
        leagues.map(league => <League league={league}></League>)
      }
     </div>
     </div>
    </>
  );
};

export default Header;
