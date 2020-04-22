import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import PublicTrips from "../PublicTrips";
import HomeAdm from "../HomeAdm"
import CreateTrip from "../CreateTrip"
import TripList from "../TripList"


export const routes = {
  root: "/",
  publicTrips: "/allTrips",
  homeAdm: "/home",
  createTrip: "/home/create-trip",
  tripList: "/home/trip-list",
};

export function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={LoginPage} />
        <Route exact path={routes.publicTrips} component={PublicTrips} />
        <Route exact path={routes.homeAdm} component={HomeAdm} />
        <Route exact path={routes.createTrip} component={CreateTrip} />
        <Route exact path={routes.tripList} component={TripList} />
      </Switch>
    </ConnectedRouter>
  );
}

