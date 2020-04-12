import React,{Component} from "react"

const apiKey= "42eb3eaf"


export class ShearchForms extends Component{
    state={
        inputMovie:""
    }

    _handleChange = (e) =>{
        this.setState({inputMovie: e.target.value})
    }


    _handleSumbmit = (e) =>{
        e.preventDefault()
        fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${this.state.inputMovie}`)
        .then(res=>res.json())
        .then(results => {
            console.log(results)
            console.log(Object.keys(results))
            //Recordar que se puede poner un 
            //default value desde aquí y de esta forma
            //const {Search = [],totalresults=0} = results
            const {Search , totalResults } = results
            this.props.onResults(Search)
        })
        console.log(this.state.inputMovie)
    }
    render(){
        return(
        <form onSubmit={this._handleSumbmit}>
        <div className="field has-addons">
            <div className="control">
                <input 
                className="input" 
                onChange={this._handleChange}
                 placeholder="Movie to search...">
                </input>
             </div>
            <div className="control">
                <button className="button is-info">
                Search
                </button>
            </div>
        </div>    
        </form>        
        )
    }
}