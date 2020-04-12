import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import "bulma/css/bulma.css";
import {Detail} from "./pages/Detail.js"
import {Home} from "./pages/Home.js"
import {Switch , Route } from "react-router-dom"
import {NotFound} from "./pages/NotFound.js"

class  App extends Component {
  render(){
    const url = new URL(document.location)
    const hasId = url.searchParams.has("id")
    const Page =
        url.searchParams.has("id") ? 
        <Detail id={url.searchParams.get('id')}></Detail>
        : <Home></Home> 

    return (
      <div className="App">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/detail/:id" component={Detail}></Route>
            <Route component={NotFound}></Route>
          </Switch>
      </div>
    );
  }
}

export default App;
