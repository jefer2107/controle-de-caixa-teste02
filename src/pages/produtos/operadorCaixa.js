import React, { useState, useEffect } from "react"
import "./operadorCaixa.css"
import { cancelItem, productRegistration, removeItem, returnItemByCode } from "../../services/productService"

export default function OperadorCaixa(){
    const [model, setModel] = useState({codigo:""})
    const [item, setItem] = useState([])
    const [message, setMessage] = useState()
    let valorTotal = 0

    const changeModel = ({target})=>{
        setModel((state)=>{
            return {...state, [target.name]: target.value}
        })
    }

    const addItem = (itens)=>{
        if(!item.some(e=>e.codigo === itens.codigo)){
            setItem((state)=>{
                return [...state, itens]
            })
        }
           
    }

    useEffect(()=>{
        if(model.codigo.length === 6){
            returnItemByCode(model.codigo).then((x)=>{
                addItem(x)
                removeItem(model.codigo)
                setModel({codigo:""})
            }).catch(()=>{
                setMessage("Ítem não encontrado")
            })
        }
    }, [model.codigo])

    const delet = (code)=>{
        cancelItem(code).then(()=>{
            setItem((state)=>{
                const newItem = [...state]
                const verifyItem = item.findIndex(e=> e.codigo === code)
                newItem.splice(verifyItem, 1)
                return newItem
            })
        })
    }

    return(
        <div className="container-fluid operador-caixa">
            <form className="container py-4">
                <h3 className="text-center py-4 font-weight-bold">Operador de caixa</h3>
                <input onChange={changeModel} className="form-control" value={model.codigo} type="text" name="codigo" placeholder="Digite o código de barras" />
                <div className="text-center font-weight-bold">
                    <span className="text-primary my-2"> {message} </span>
                </div>
            </form>
            <table className="container tabela-1">
                <thead className="text-center font-weight-bold">
                    <tr>
                        <td>CÓD. BARRAS</td>
                        <td>NOME</td>
                        <td>TIPO</td>
                        <td>VALOR UNIT.</td>
                        <td>TOTAL</td>
                        <td>CANCELAMENTO</td>
                    </tr>
                </thead>
                <tbody>
                    {item.map((x)=>{
                        return(
                            <tr>
                                <td> {x.codigo} </td>
                                <td> {x.nome} </td>
                                <td> {x.tipo} </td>
                                <td> {x.valor} </td>
                                <td> {valorTotal = valorTotal + x.valor} </td>
                                <td>
                                    <button onClick={()=> delet(x.codigo)} type="button" className="btn btn-danger btn-block">Cancelar</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <table className="tabela-2 container">
                <thead>
                    <tr>
                        <td className="td-1 font-weight-bold">TOTAL A PAGAR</td>
                        <td className="td-2 text-center"> {valorTotal} </td>
                    </tr>
                </thead>
            </table>
        </div>
    )
}