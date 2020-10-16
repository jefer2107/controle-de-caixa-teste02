import React, { useState } from "react"
import "./cadastroUsuario.css"
import { userRegister } from "../../services/userRegistrationService"
import { useHistory } from "react-router-dom"

export default function CadastroUsuario(){
    const [model, setModel] = useState({nome:"", email:"", senha:""})
    const [message, setMessage] = useState()
    const history = useHistory()

    const changeModel = ({target})=>{
        setModel((state)=>{
            return {...state, [target.name]: target.value}
        })
    }

    const cadastrar = (event)=>{
        userRegister(model).then(()=>{
            history.push("/lista-usuario")
        }).catch((e)=>{
            setMessage(e)
        })

        event.preventDefault()
    }

    return(
        <div className="cadastro-usuario d-flex">
            <form onSubmit={cadastrar} className="mx-auto">
                <h3 className="text-center font-weight-bold py-4">Cadastro de Usuário</h3>
                <input onChange={changeModel} className="form-control my-1" name="nome" type="text" placeholder="Digite um nome" />
                <input onChange={changeModel} className="form-control my-1" name="email" type="email" placeholder="Digite o email" />
                <input onChange={changeModel} className="form-control my-1" name="senha" type="password" placeholder="Digite uma senha" />
                <button type="submit" className="btn btn-success btn-block my-2">Cadastrar</button>
                <span className="text-center text-success font-weight-bold"> {message} </span>
            </form>
        </div>
    )
}