import React, { useState } from "react"
import "./cadastroProduto.css"
import { productRegistration } from "../../services/productService"
import { useHistory } from "react-router-dom"

export default function CadastroProduto(){
    const [model, setModel] = useState()
    const [message, setMessage] = useState()
    const history = useHistory()

    const changeModel = ({target})=>{
        setModel((state)=>{
            return {...state, [target.name]: target.value}
        })
    }

    const cadastrar = (event)=>{
        productRegistration(model).then((x)=>{
            history.push("/lista-produtos")
        }).catch((e)=>{
            setMessage(e)
        })

        event.preventDefault()
    }

    return(
        <div className="cadastro-produto d-flex">
            <form onSubmit={cadastrar} className="mx-auto">
                <h3 className="text-center font-weight-bold py-4">Cadastro de Produtos</h3>
                <input onChange={changeModel} className="form-control my-1" name="nome" placeholder="Digite o nome" />
                <input onChange={changeModel} className="form-control my-1" name="tipo" placeholder="Digite o tipo" />
                <input onChange={changeModel} className="form-control my-1" name="codigo" placeholder="Digite o código de barras" />
                <input onChange={changeModel} className="form-control my-1" name="valor" placeholder="Digite o valor" />
                <button type="submit" className="btn btn-success btn-block my-2">Cadastrar</button>
                <span className="text-center text-success font-weight-bold"> {message} </span>
            </form>
        </div>
    )
}