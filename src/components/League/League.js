import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./League.css";
import "./League.css";
const League = (props) => {
  // console.log(props)
  const { idLeague, strLeague, strSport, strLeagueAlternate } = props.league;
  let history = useHistory();
  const handleClick = () => {
    history.push(`/LeagueDetails/${idLeague}`);
  };

  //   LeagueDetails API
  let [details, setDetails] = useState([]);
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetails(data.leagues[0]));
  }, []);

  const { strBadge } = details;
  return (
    <>
      <div class="card container league-cover ">
        <img src={strBadge} class="card-img-top badge-img"></img>
        <div class="card-body">
          <h5 class="card-title">{strLeague}</h5>
          <p class="card-text">{strLeagueAlternate}</p>
          <a onClick={handleClick} class="btn btn-primary">
            Explore
          </a>
        </div>
      </div>
    </>
  );
};

export default League;

{
  /* <div class="card col-4 p-3">
        <div class="card-body p-3 border bg-light">
          <h5 class="card-title">{strLeague}</h5>
          <p class="card-text">{strLeagueAlternate}</p>
          <a onClick={handleClick} class="btn btn-primary">
            Explore
          </a>
        </div>
      </div> */
}
