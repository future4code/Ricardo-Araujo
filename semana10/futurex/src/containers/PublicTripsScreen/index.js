import React from "react";
import { connect } from "react-redux";
import {fetchTrips} from "../../actions/trips";
import FormTripApplication from "../FormTripApplication"
import TripCard from "../../components/TripCard"
import {DivGrid} from './style'
import Typography from '@material-ui/core/Typography';
import { push } from "connected-react-router";
import { routes } from "../Router";

class PublicTripsScreen extends React.Component {


componentDidMount(){
    this.props.fetchTrips()
}


renderTrips=()=>{
    const tripCards = this.props.trips.map((trip)=>{
        return (    
                <div key={trip.id}>
                    <TripCard name={trip.name}
                        description={trip.description}
                        planet={trip.planet}
                        date={trip.date}
                        duration={trip.duration}
                        handleApplicationToTrip={this.handleApplicationToTrip}
                        handleDetailsTrip={this.handleDetailsTrip}
                    />
                </div>
        )
    })

    return tripCards;
}

handleApplicationToTrip=()=>{
    console.log("trip application")
}

handleDetailsTrip=()=>{
    this.props.goToTripDetailScreen()
}

render(){
    console.log(this.props.trips)

    return(
        <div>
            <Typography variant="h4" color="textSecondary" component="h4">
                Veja todas as viagens publicas disponiveis para cadastro
            </Typography>

        <DivGrid>
            {this.renderTrips()}
            {this.renderTrips()}
        </DivGrid>

            {/* <FormTripApplication/> */}



        </div>
    )
}

}

const mapStateToProps = (state) =>{
    return{
        trips: state.trips.trips
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        fetchTrips: () => dispatch(fetchTrips()),
        goToTripDetailScreen: () => dispatch(push(routes.tripDetailScreen))
    }
  }


export default connect (mapStateToProps, mapDispatchToProps) (PublicTripsScreen);