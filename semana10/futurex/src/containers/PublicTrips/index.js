import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router"
import { CountryDropdown } from "react-country-region-selector"


const applyForTripForm =[
    {
        name: "name",
        type: "text",
        label: "Nome",
        pattern: "[A-Za-z ãéÁáêõÕÊíÍçÇÚúüÜ]{3,}",
        title: "o nome deve conter no mínimo 3 letras"
    },
    {
        name: "age",
        type: "number",
        label: "Idade",
        pattern: "",
        title: "",
        min: 18,
        max: 100,
    },
    {
        name: "applicationText",
        type: "text",
        label: "Porque gostaria de ir ?",
        pattern: "[A-Za-z ãéÁáêõÕÊíÍçÇÚúüÜ]{30,}",
        title: "Descreva o porque gostaria de ir nesta viagem"
    },
    {
        name: "profession",
        type: "text",
        label: "Profissão",
        pattern: "[A-Za-z ãéÁáêõÕÊíÍçÇÚúüÜ]{10,}",
        title: "Descreva sua profissão, no mínimo 10 caracteres"
    },
] 


class PublicTrips extends React.Component {
    constructor(props){
        super(props)
        this.state={
            form:{}
        }
    }

handleInputChange = (event) =>{
    const { name, value} = event.target;

    this.setState({form: {...this.state.form, [name]: value}})
}

handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.form)
}

handleSelectCountry=(event)=>{
    this.setState({form:{...this.state.form, country: event}})
}


render(){
    const { goTologinScreen } = this.props
    return(
        <div>
            <h1>Public AllTrips Screen</h1>
            <button onClick={goTologinScreen}>volta para tela de login</button>


            <form onSubmit={this.handleSubmit}>
                {applyForTripForm.map((input)=>(
                    <div key={input.name}>
                        <label htmlFor={input.name}>{input.label}</label>
                        <input
                            id={input.name}
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
            <CountryDropdown 
                name={"country"} 
                value={this.state.form.country || ""} 
                required
                onChange={this.handleSelectCountry}
            />
            <button type="submit">Enviar</button>
            
            </form>
        </div>
    )
}

}

const mapDispatchToProps = dispatch =>{
    return{
        goTologinScreen: () => dispatch(push(routes.root))
    }
  }


export default connect (null, mapDispatchToProps) (PublicTrips);