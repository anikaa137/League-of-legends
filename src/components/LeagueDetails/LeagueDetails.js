import "./LeagueDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRegistered,
  faFlag,
  faFutbol,
  faMars,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import male from "../../images/male.jpg";
import female from "../../images/female.jpg";
import facebook from "../../images/facebook.png";
import youtube from "../../images/yout.jpg";
import twitter from "../../images/twiter.png";
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
  } = details;

  let gender;
  if (strGender === "Male") {
    gender = male;
  } else {
    gender = female;
  }

  //home button
  let history = useHistory();
  let handleClick = () => {
    history.push("/home");
  };
  return (
    <div>
      {/* LeagueDetails banner & badge */}
      <div class="card bg-dark text-white banner">
        <img src={strBanner} class="card-img" alt="..."></img>
        <div class="card-img-overlay badge">
          <img src={strBadge} alt="" />
        </div>
      </div>

      {/* LeagueDetails info & img  */}
      <div class="card mb-3 league-info">
        <div class="row g-0">
          <div class="col-md-8 p-3">
            <div class="card-body">
              <h1 class="card-title">{strLeague}</h1>
              <br />
              <h6 class="card-text">
                <FontAwesomeIcon icon={faRegistered} /> Founded:
                {dateFirstEvent}
              </h6>
              <h6 class="card-text">
                <FontAwesomeIcon icon={faFlag} /> Country: {strCountry}
              </h6>
              <h6 class="card-text">
                <FontAwesomeIcon icon={faFutbol} />
                Sport Type: {strSport}
              </h6>
              <h6 class="card-text">
                <FontAwesomeIcon icon={faMars} /> Gender: {strGender}
              </h6>
            </div>
          </div>
          <div class="col-md-4 group-img">
            <img src={gender} alt="..."></img>
          </div>
        </div>
      </div>

      {/* LeagueDetails description */}
      <div>
        <div class="card container mb-5 details-description">
          <div class="card-body">{strDescriptionEN}</div>
        </div>
        <div class="card container mb-5 details-description">
          <div class="card-body">{strDescriptionFR}</div>
        </div>
      </div>

      {/* social icons */}
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-sm-1">
            <a href={`https://${strFacebook}`} target="_blank">
              <img src={facebook} />
            </a>
          </div>
          <div class="col-sm-1">
            <a href={`https://${strTwitter}`} target="_blank">
              <img src={twitter} />
            </a>
          </div>
          <div class="col-sm-1">
            <a href={`https://${strYoutube}`} target="_blank">
              <img src={youtube} />
            </a>
          </div>
        </div>
      </div>

      {/* home button */}
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button class="btn btn-primary me-md-2" onClick={handleClick}>
          Go Home
        </button>
      </div>
    </div>
  );
};

export default LeagueDetails;
