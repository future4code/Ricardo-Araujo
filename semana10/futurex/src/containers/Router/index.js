import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import AllTrips from "../AllTrips";
import HomeAdm from "../HomeAdm"
import CreateTrip from "../CreateTrip"
import TripList from "../TripList"


export const routes = {
  root: "/",
  allTrips: "/allTrips",
  homeAdm: "/home",
  createTrips: "/create-trip",
  tripList: "/trip-list",
};

export function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={LoginPage} />
        <Route exact path={routes.allTrips} component={AllTrips} />
        <Route exact path={routes.homeAdm} component={HomeAdm} />
        <Route exact path={routes.createTrip} component={CreateTrip} />

        <Route exact path={routes.tripList} component={TripList} />
      </Switch>
    </ConnectedRouter>
  );
}

