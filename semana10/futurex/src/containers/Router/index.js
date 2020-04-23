import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import PublicTrips from "../PublicTrips";
import HomeAdm from "../HomeAdm"
import CreateTripScreen from "../CreateTripScreen"
import TripList from "../TripList"
import TripDetailScreen from "../TripDetailScreen"


export const routes = {
  root: "/",
  publicTrips: "/public-Trips",
  homeAdm: "/home",
  createTrip: "/home/create-trip",
  tripList: "/home/trip-list",
  tripDetailScreen: "/home/trip-list/details"
};

export function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={LoginPage} />
        <Route exact path={routes.publicTrips} component={PublicTrips} />
        <Route exact path={routes.homeAdm} component={HomeAdm} />
        <Route exact path={routes.createTrip} component={CreateTripScreen} />
        <Route exact path={routes.tripList} component={TripList} />
        <Route exact path={routes.tripDetailScreen} component={TripDetailScreen} />
      </Switch>
    </ConnectedRouter>
  );
}

