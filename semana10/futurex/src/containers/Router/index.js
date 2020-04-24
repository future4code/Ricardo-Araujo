import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import PublicTripsScreen from "../PublicTripsScreen";
import CreateTripScreen from "../CreateTripScreen"
import TripDetailScreen from "../TripDetailScreen"


export const routes = {
  root: "/",
  publicTrips: "/trips",
  createTrip: "/trips/create",
  tripDetailScreen: "/trips/details"
};

export function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={LoginPage} />
        <Route exact path={routes.publicTrips} component={PublicTripsScreen} />
        <Route exact path={routes.createTrip} component={CreateTripScreen} />
        <Route exact path={routes.tripDetailScreen} component={TripDetailScreen} />
      </Switch>
    </ConnectedRouter>
  );
}

