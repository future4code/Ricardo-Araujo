import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ContainerUser = styled.div`
`


class UserDetails extends React.Component{
    

renderizaDetalhesUsuario=()=>{

    // const auxiliar=this.props.detalheUsuario.map(elemento)=>{
    //     return (<div key={elemento.id}>
    //                 <span>{elemento.name}</span>
    //             </div> )
    // })

return <div>{this.props.detalheUsuario.name}</div>;

}
    

render(){
    return(
        <ContainerUser>

            {this.renderizaDetalhesUsuario()}


        </ContainerUser>
    )
}
}
export default UserDetails;