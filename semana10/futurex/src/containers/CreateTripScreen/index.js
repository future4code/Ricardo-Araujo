import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
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
        pattern: "[A-Za-z ãéÁáêõÕÊíÍçÇÚúüÜ]{30,}",
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
            form:{}
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

render(){
    const { goToHome } = this.props
    
    return(
        <div>
            <h1>Create Trips</h1>
            <button onClick={goToHome}>volta para home</button>

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

                <button type="submit">Enviar</button>
            </form>
           








        </div>
    )
}

}

const mapDispatchToProps = dispatch =>{
    return{
        goToHome: () => dispatch(push(routes.homeAdm)),
        createTrips: (body, token) => dispatch(createTrips(body, token))
    }
  }


export default connect (null, mapDispatchToProps) (CreateTripScreen);

//references:
//https://www.npmjs.com/package/react-country-region-selector
