import React from 'react'
import { connect } from "react-redux";
import { replace } from "connected-react-router";
import { routes } from "../Router"
import { getTripDetail, decideCandidate } from "../../actions/trips"


class TripDetailScreen extends React.Component{

    
    componentDidMount(){
        const {goTologinScreen, selectedTrip, goToPublicTrips, getTripDetail}=this.props

        const token = localStorage.getItem("token");
    
        ((token === null) && goTologinScreen());

        ((selectedTrip !== "") ? getTripDetail(selectedTrip, token)
                               : goToPublicTrips());
    }


   renderApproved=()=>{
       const {trip}=this.props

       if(trip.candidates !== undefined){

       const approved = trip.approved.map((element)=>{
           return(<div key={trip.approved.id}>
           <div>{element.name}</div>
           <div>{element.applicationText}</div>
           <div>{element.country}</div>
           <div>{element.profession}</div>
           <div>{element.age}</div>
           </div>)
       })

       return approved;
        }
   }

   renderCandidates=()=>{
    const {trip, selectedTrip, decideCandidate}=this.props
    const token = localStorage.getItem("token");

    if(trip.candidates !== undefined){

        const candidates = trip.candidates.map((element)=>{
            return(<div key={trip.candidates.id}>
            <div>{element.name}</div>
            <div>{element.applicationText}</div>
            <div>{element.country}</div>
            <div>{element.profession}</div>
            <div>{element.age}</div>
            <button onClick={()=>decideCandidate(selectedTrip, true, token)}>aprovar candidato</button>
            <br/>
            </div>)
        })
        
        return candidates;
    }

    console.log(trip.candidates)
    }

    render(){
        const {trip} = this.props
        console.log(trip)

        return(
            <div>
                <h1>Tela de detalhes</h1>
                <p>Aqui vou colocar a lista de candidatos + deletar viagem</p>
                
                <p>Nome: {trip.name}</p>
                <p>Planeta: {trip.planet}</p>
                <p>Duração: {trip.durationInDays}</p>
                <p>Data: {trip.date}</p>
                <p>Descrição {trip.description}</p>
                
                <br/>
                <p>Candidatos</p>
                {this.renderCandidates()}
                <br/>
                <p>Aprovados</p>
                {this.renderApproved()}

            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        selectedTrip: state.trips.selectedTrip,
        trip: state.trips.details
    }
}


const mapDispatchToProps = dispatch =>{
    return{
        goToPublicTrips: () => dispatch(replace(routes.publicTrips)),
        getTripDetail: (tripId, token) => dispatch(getTripDetail(tripId, token)),
        decideCandidate: (tripId, approve, token) => dispatch(decideCandidate(tripId, approve, token))
    }
  }


export default connect (mapStateToProps, mapDispatchToProps) (TripDetailScreen)