import React,{Component} from "react"
import {Link } from "react-router-dom"

export class ButtonBackToHome extends Component{
    render(){
        return(
            <div>   
                <Link 
                className="button is-info"
                to="/"
                >Volver</Link>


            </div>
        )
    }
}