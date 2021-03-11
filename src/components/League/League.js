import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./League.css";
import "./League.css";
const League = (props) => {
  // console.log(props)
  const { idLeague, strLeague,strLeagueAlternate } = props.league;
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
  }, [idLeague]);
  const { strBadge } = details;
  return (
    <>
      <div class="card container shadow-lg p-3 mb-5 bg-body rounded league-cover ">
        <img src={strBadge} alt="league-badge" class="card-img-top badge-img"></img>
        <div class="card-body">
          <h5 class="card-title">{strLeague}</h5>
          <p class="card-text">{strLeagueAlternate}</p>
          <button onClick={handleClick} class="btn btn-primary">
            Explore
          </button>
        </div>
      </div>
    </>
  );
};

export default League;
