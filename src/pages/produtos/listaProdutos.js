import React, { useEffect, useState } from "react"
import "./listaProdutos.css"
import { returnItem } from "../../services/productService"

export default function ListaProdutos(){
    const [item, setItem] = useState([])

    useEffect(()=>{
        returnItem().then((x)=>{
            setItem(x)
        })
    }, [item])

    return(
        <div className="container-fluid lista-produtos">
            <h3 className="text-center py-4">Lista de Produtos</h3>
            <table className="container">
                <thead className="text-center font-weight-bold">
                    <tr>
                        <td>ID</td>
                        <td>NOME</td>
                        <td>TIPO</td>
                        <td>CÓD.BARRAS</td>
                        <td>VALOR</td>
                    </tr>
                </thead>
                <tbody>
                    {item.map((x)=>{
                        return(
                            <tr>
                                <td> {x.id} </td>
                                <td> {x.nome} </td>
                                <td> {x.tipo} </td>
                                <td> {x.codigo} </td>
                                <td> {x.valor} </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}