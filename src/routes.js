import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Header from "./components/header/header"
import Login from "./pages/usuario/login"
import UserList from "./pages/usuario/lista"


export default function Routes(){
    return(
        <BrowserRouter>
        <Header />
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/lista-usuario" component={UserList} />
            </Switch>
        </BrowserRouter>
    )
}