import React from "react"
import { Link } from "react-router-dom"

export default function Header(){
    return(
        <div>
            <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/lista-usuario">Lista de Usuário</Link></li>
            </ul>
        </div>
    )
}