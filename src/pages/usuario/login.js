import React, { useState } from "react"
import "./login.css"
import { authenticateUser } from "../../services/userService"
import { useHistory } from "react-router-dom"

export default function Login(){
    const [model, setModel] = useState({nome:"", email:"", senha:""})
    const [message, setMessage] = useState()
    const history = useHistory()

    const Changemodel = ({target})=>{
        setModel((state)=>{
            return {...state, [target.name]: target.value}
        })
    }

    const Logar = (event)=>{
        authenticateUser(model.email, model.senha).then((x)=>{
            setMessage("Usuário logado!")
        }).catch((e)=>{
            setMessage(e)
        })

        event.preventDefault()
    }

    return(
        <div onSubmit={Logar} className="login d-flex">
            <form className="mx-auto">
                <h3 className="text-center font-weight-bold">Login</h3>
                <input className="form-control my-1" onChange={Changemodel} placeholder="Digite o nome" type="text" name="nome"></input>
                <input className="form-control my-1" onChange={Changemodel} placeholder="Digite o email" type="email" name="email"></input>
                <input className="form-control my-1" onChange={Changemodel} placeholder="Digite a senha" type="password" name="senha"></input>
                <button type="submit" className="btn btn-primary btn-block my-2">Logar</button>
                <div className="text-center text-primary">
                    <span className="font-weight-bold"> {message} </span>
                </div>
            </form>
        </div>
    )
}