import React from 'react'

class Users extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

render(){
    return(
        <div>
            {this.props.children}
            Estou na lista
        </div>

    )




}



}
export default Users;