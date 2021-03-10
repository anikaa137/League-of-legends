import'./LeagueDetails.css'
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const LeagueDetails = () => {
  let { idLeague } = useParams();
  const [details, setDetails] = useState([]);
  //    console.log(details)
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetails(data.leagues[0]));
  }, []);

  const {
    strBanner,
    strBadge,
    strLeague,
    dateFirstEvent,
    strCountry,
    strSport,
    strGender,
    strDescriptionEN,
    strDescriptionFR,
    strFacebook,
    strTwitter,
    strYoutube,
    strLogo,
  } = details;
  return (
    <div>
      <div class="card bg-dark text-white banner">
        <img src={strBanner} class="card-img" alt="..."></img>
        <div class="card-img-overlay badge">
        <img src={strBadge} alt="" />
        </div>
      </div>

      

    </div>
  );
};

export default LeagueDetails;
