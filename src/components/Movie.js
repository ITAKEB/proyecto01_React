import React,{Component } from "react"
import PropTypes from "prop-types"
import {Link } from "react-router-dom"

export default class Movie extends Component{
    static propTypes ={
        tittle: PropTypes.string,
        year: PropTypes.string,
        poster: PropTypes.string,
        id: PropTypes.string
    }
    render(){
        const {tittle, year , poster, id} = this.props
        
        return(
                <div className="card">
                <Link to={`/detail/${id}`}>
                    <div className="card-image">
                        <figure className="image">
                        <img src={poster} 
                        alt={tittle}/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">{tittle}</p>
                                <p className="subtitle is-6">{year}</p>
                            </div>
                        </div>
                    </div>
                </Link>
                </div>      

        )
    }

}