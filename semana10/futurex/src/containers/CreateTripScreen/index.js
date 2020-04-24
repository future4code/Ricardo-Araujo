import React from "react";
import { connect } from "react-redux";
import { push, replace } from "connected-react-router";
import { routes } from "../Router"
import { createTrips } from "../../actions/trips"

const createTripForm=[
    {
        name: "name",
        type: "text",
        label: "Nome",
        pattern: "[A-Za-z ãéÁáêõÕÊíÍçÇÚúüÜ]{5,}",
        title: "O nome deve conter no mínimo 5 letras"
    },
    {
        name: "date",
        type: "date",
        label: "Data",
        pattern: "",
        title: ""
    },
    {
        name: "description",
        type: "text",
        label: "Descrição",
        pattern: "[A-Za-z ãéÁáêõÕÊíÍçÇÚúüÜ 0123456789]{30,}",
        title: "A descrição deve conter no mínimo 30 caracteres"
    },
    {
        name: "durationInDays",
        type: "number",
        label: "Duração em dias",
        pattern: "",
        title: "",
        min: 50,
        max: 100
    }
]

class CreateTripScreen extends React.Component {
    constructor(props){
        super(props)
        this.state={
            form:{
                planet: ""
            }
        }
    }

    componentDidMount(){
        const token = localStorage.getItem("token");
    
        (token === null && this.props.goTologinScreen())
    }

    handleInputChange = (event) =>{
        const { name, value} = event.target;

        this.setState({form: {...this.state.form, [name]: value}})
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        console.log(this.state.form)

        const token = localStorage.getItem("token");

        this.props.createTrips(this.state.form , token)
    }

    handleSelectPlanet = (event)=>{
        this.setState({
            form: {...this.state.form, planet: event.target.value}
        })
    }

render(){
    
    return(
        <div>
            <h1>Create Trips</h1>

            <form onSubmit={this.handleSubmit}>
                {createTripForm.map((input)=>(
                    <div>
                        <label htmlFor={input.name}>{input.label}</label>
                        <input
                            name={input.name}
                            type={input.type}
                            value={this.state.form[input.name] || ""}
                            required
                            onChange={this.handleInputChange}
                            pattern={input.pattern}
                            title={input.title}
                            min={input.min || ""}
                            max={input.max || ""}
                        />
                    </div>
                ))}
                <select onChange={this.handleSelectPlanet}>
                    <option></option>    
                    <option>Mercúrio</option>    
                    <option>Vênus</option>    
                    <option>Terra</option>    
                    <option>Marte</option>    
                    <option>Júpiter</option>    
                    <option>Saturno</option>    
                    <option>Urano</option>    
                    <option>Neturno</option>    
                    <option>Plutão ??</option>    
                </select> 

                <button type="submit">Enviar</button>
            </form>

        </div>
    )
}

}

const mapDispatchToProps = dispatch =>{
    return{
        goTologinScreen: () => dispatch(replace(routes.root)),
        createTrips: (body, token) => dispatch(createTrips(body, token))
    }
  }


export default connect (null, mapDispatchToProps) (CreateTripScreen);

//references:
//https://www.npmjs.com/package/react-country-region-selector
