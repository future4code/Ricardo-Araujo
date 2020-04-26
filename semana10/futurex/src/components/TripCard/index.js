import React from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {TripCardWrapper} from "./style"


export default class TripCard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            logged: false
        }
    }

    componentDidMount(){
        const token = localStorage.getItem("token");

        (token !== null && this.setState({logged: true}))
    }

    handleApplicationToTrip=()=>{
        this.props.handleApplicationToTrip()
    }
    
    handleDetailsTrip=()=>{
        this.props.handleDetailsTrip()
    }


    render(){
        return(
            <TripCardWrapper>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwHlSQzp5UFHhZSbi9ZgGoq_sDQtBqcn_PsqDnJbJaqn7xCe2x&usqp=CAU"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {this.props.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {this.props.description}
                            </Typography>
                            <br/>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Planeta: {this.props.planet}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Quando: {this.props.date}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Duração: {this.props.duration}
                            </Typography>
                        </CardContent>

                    </CardActionArea>

                    {this.state.logged ? 
                        <CardActions>
                            <Button size="small" color="primary" onClick={this.handleDetailsTrip}>
                                Detalhes da viagem
                            </Button>
                        </CardActions>
                    :
                        <CardActions>
                            <Button size="small" color="primary" onClick={this.handleApplicationToTrip}>
                                Canditatar-se Para a Viagem
                            </Button>
                        </CardActions>
                    }


                </Card>
            </TripCardWrapper>
        )
    }
}