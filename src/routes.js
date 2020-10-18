import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Header from "./components/header/header"
import Login from "./pages/usuario/login"
import UserList from "./pages/usuario/lista"
import CadastroUsuario from "./pages/usuario/cadastroUsuario"
import CadastroProduto from "./pages/produtos/cadastroProduto"
import ListaProdutos from "./pages/produtos/listaProdutos"
import EditarProduto from "./pages/produtos/editarProduto"


export default function Routes(){
    return(
        <BrowserRouter>
        <Header />
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/lista-usuario" component={UserList} />
                <Route exact path="/cadastro-usuario" component={CadastroUsuario} />
                <Route exact path="/cadastro-produto" component={CadastroProduto} />
                <Route exact path="/lista-produtos" component={ListaProdutos} />
                <Route exact path="/editar-produto/:id" component={EditarProduto} />
            </Switch>
        </BrowserRouter>
    )
}