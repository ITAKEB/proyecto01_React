import React,{Component} from "react"
import PropTypes from "prop-types"
import Movie from "./Movie.js"

export default class Movieslist extends Component {
    state={
        movies: []
    }

    static propTypes ={
        movies: PropTypes.array
    }

    render(){
      const {movie} = this.props
      console.log(movie.map(move=>move))
      console.log(movie.map(move=>move.Title))
      return(
          <div className="MovieList">
              {
                  movie.map(move =>{
                    return <div key={move.imdbID} className="MoviesList-items">
                            <Movie 
                            tittle={move.Title}
                            year={move.Year}
                            poster={move.Poster}
                            id={move.imdbID}
                             ></Movie>
                            </div>
                  })
              }
          </div>
      )
    }
}
