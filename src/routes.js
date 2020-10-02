import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Header from "./components/header/header"
import Login from "./usuario/login"

export default function Routes(){
    return(
        <BrowserRouter>
        <Header />
            <Switch>
                <Route exact path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    )
}