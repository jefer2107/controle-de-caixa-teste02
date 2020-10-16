import React from "react"
import { Link } from "react-router-dom"

export default function Header(){
    return(
        <div>
            <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/lista-usuario">Lista de Usuário</Link></li>
                <li><Link to="/cadastro-usuario">Cadastro de Usuário</Link></li>
                <li><Link to="/cadastro-produto">Cadastro de Produtos</Link></li>
                <li><Link to="/lista-produtos">Lista de Produtos</Link></li>
            </ul>
        </div>
    )
}