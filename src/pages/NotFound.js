import React, {Component } from "react"
import {ButtonBackToHome} from "../components/bottonBackToHome"
export const NotFound = ()=>{
    return(
        <div>
        <h1 className="title">404!</h1>
        <h2 className="subtitle">La página no existe</h2>
        <ButtonBackToHome></ButtonBackToHome>
        </div>
    )
}