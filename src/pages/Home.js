import React, {Component} from "react"
import {ShearchForms} from "../components/searchForm.js"
import MoviesList from "../components/MovieList.js"
import {Tittle} from "../components/tittle.js"
export class Home extends Component {
    state = {usedSearch:false ,results: []}


    _handleResults = (results)=>{
        this.setState({results:results}) 
    }
  
    /*_renderResults  () {
        const {results} = this.state
        console.log(results.map(move=>move))
        console.log(results.map(move=>move.Title))
        return results.map(move =>{
          return <Movie key={move.imdbID} 
                  tittle={move.Title}
                  year={move.Year}
                  poster={move.Poster}
                   ></Movie>
        })
    }*/
  
    render(){
        return(
            <div>
                <Tittle>Search Movies</Tittle>
                <div className="ShearchForm-wrapper">
                <ShearchForms onResults={this._handleResults}></ShearchForms>
                </div>
                {this.state.results == null
                ? <p>Sin Resultados</p>:
                <MoviesList movie={this.state.results}></MoviesList>}
            </div>
        )
    }
}