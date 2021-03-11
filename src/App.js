import "./App.css"
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import LeagueDetails from "./components/LeagueDetails/LeagueDetails";
import Notfound from "./components/NotFound/Notfound";

function App() {
  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route exact path='/'>
              <Header/>
            </Route>
            <Route path="/home">
            <Header/>
            </Route>
            <Route path="/leagueDetails/:idLeague">
            <LeagueDetails/>
            </Route>
            <Route path="*">
             <Notfound/>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
