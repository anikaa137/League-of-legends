import React from "react";
import { useHistory } from "react-router-dom";
import'./League.css'
const League = (props) => {
  // console.log(props)
  const { idLeague, strLeague, strSport, strLeagueAlternate } = props.league
  let history = useHistory();
  const handleClick = () =>{
    history.push(`/LeagueDetails/${idLeague}`)
  }
  return (
    <>
      <div class="card col-4 p-3">
        <div class="card-body p-3 border bg-light">
          <h5 class="card-title">{strLeague}</h5>
          <p class="card-text">
           {strLeagueAlternate}
          </p>
          <a  onClick={handleClick} class="btn btn-primary">
          Explore
          </a>
        </div>
      </div>
    </>
  );
};

export default League;
