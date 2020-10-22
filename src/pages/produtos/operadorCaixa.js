import React, { useState, useEffect } from "react"
import "./operadorCaixa.css"
import { returnItemByCode } from "../../services/productService"

export default function OperadorCaixa(){
    const [model, setModel] = useState({codigo:""})
    const [item, setItem] = useState([])

    const changeModel = ({target})=>{
        setModel((state)=>{
            return {...state, [target.name]: target.value}
        })
    }

    const addItem = (itens)=>{
        if(!item.some(e=>e.codigo === itens.codigo))
            setItem((state)=>{
                return [...state, itens]
            })
    }

    useEffect(()=>{
        if(model.codigo.length === 6){
            returnItemByCode(model.codigo).then((x)=>{
                addItem(x)
                setModel({codigo:""})
            })
        }
    }, [model.codigo])

    return(
        <div className="container-fluid operador-caixa">
            <form className="container py-4">
                <h3 className="text-center py-4 font-weight-bold">Operador de caixa</h3>
                <input onChange={changeModel} className="form-control" value={model.codigo} type="text" name="codigo" placeholder="Digite o código de barras" />
            </form>
            <table className="container">
                <thead className="text-center font-weight-bold">
                    <tr>
                        <td>NOME</td>
                        <td>TIPO</td>
                        <td>VALOR</td>
                    </tr>
                </thead>
                <tbody>
                    {item.map((x)=>{
                        return(
                            <tr>
                                <td> {x.nome} </td>
                                <td> {x.tipo} </td>
                                <td> {x.valor} </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}