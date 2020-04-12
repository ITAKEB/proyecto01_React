import React,{Component }from "react"
import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import {ButtonBackToHome} from "../components/bottonBackToHome"
const apiKey= "42eb3eaf"

export class Detail extends Component{
    static propTypes={
        match: PropTypes.shape(
            {
                params: PropTypes.object,
                isExact: PropTypes.bool,
                patch: PropTypes.string,
                url: PropTypes.string
            }
        )
    }

    state ={
        infoMovie: {}
    }
    _fetchMovie({id}){
        fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`)
        .then(res=>res.json())
        .then(results => {
            //console.log({results})
            this.setState({infoMovie:results})
        })
    }


    componentDidMount(){
        console.log(this.props.match)
        const {id}= this.props.match.params
        this._fetchMovie({id})
    }

    _goBack(){
        window.history.back()
    }
    

    render(){
        console.log("render")
        const {Title, Poster , Actors , Metascore, Plot} =
        this.state.infoMovie
        return(
            <div>
                <ButtonBackToHome></ButtonBackToHome>
                <h4>{Title}</h4>
                <img alt={Title} 
                src={Poster}></img>
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>
            </div>
            
        )
    }
}
