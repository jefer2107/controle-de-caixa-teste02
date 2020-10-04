import React, { useState, useEffect } from "react"
import "./listaUsuario.css"
import { returnItem } from "../../services/userService"

export default function UserList(){
    const [item, setItem] = useState([])

    useEffect(()=>{
        returnItem().then((x)=>{
            setItem(x)
        })
    }, [item])

    return(
        <div className="container-fluid lista-usuario">
            <h3 className="text-center py-4">Lista de Usuário</h3>
            <table className="container">
                <thead className="text-center font-weight-bold">
                    <tr>
                        <td>ID</td>
                        <td>NOME</td>
                        <td>EMAIL</td>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {item.map((x)=>{
                        return(
                            <tr>
                                <td> {x.id} </td>
                                <td> {x.nome} </td>
                                <td> {x.email} </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}