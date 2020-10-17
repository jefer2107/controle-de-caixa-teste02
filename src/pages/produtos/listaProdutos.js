import React, { useEffect, useState } from "react"
import "./listaProdutos.css"
import { returnItem, removeItem } from "../../services/productService"

export default function ListaProdutos(){
    const [item, setItem] = useState([])

    useEffect(()=>{
        returnItem().then((x)=>{
            setItem(x)
        })
    }, [item])  

    const remove = (codigo)=>{
        removeItem(codigo).then(()=>{
            setItem((state)=>{
                const newList = [...state]
                const itemToBeRemoved = item.findIndex(e=>e.codigo === codigo)
                newList.splice(itemToBeRemoved, 1)
                return newList
            })
        })
    }

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
                        <td>EDIÇAO</td>
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
                                <td> 
                                    <div className="text-center">
                                        <button className="btn btn-primary">Editar</button> 
                                        <button onClick={()=>remove(x.codigo)} className="btn btn-danger">Excluir</button>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}