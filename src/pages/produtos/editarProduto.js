import React, { useState, useEffect } from "react"
import { returnItemById, changeItem } from "../../services/productService"
import { useParams, useHistory } from "react-router-dom"

export default function EditarProduto(){
    const [model, setModel] = useState({nome:"", tipo:"", codigo:"", valor:""})
    let {id} = useParams()
    const history = useHistory()

    useEffect(()=>{
        returnItemById(id).then((x)=>{
            setModel(x)
        })
    }, [])

    const changeModel = ({target})=>{
        setModel((state)=>{
            return {...state, [target.name]: target.value}
        })
    }

    const salvar = (event)=>{
        changeItem(model).then(()=>{
            history.push("/lista-produtos")
        })

        event.preventDefault()
    }

    return(
        <div className="editar-produto d-flex">
            <form onSubmit={salvar} className="mx-auto">
                <h3 className="text-center font-weight-bold py-4">Ediçao de Produtos</h3>
                <div className="form-label-group">
                    <h3>Nome:</h3>
                    <input onChange={changeModel} className="form-control my-1" name="nome" value={model.nome} />
                </div>
                <div className="form-label-group">
                    <h3>Tipo:</h3>
                    <input onChange={changeModel} className="form-control" name="tipo" value={model.tipo} />
                </div>
                <div className="form-label-group">
                    <h3>Cód. Barras:</h3>
                    <input onChange={changeModel} className="form-control" name="codigo" value={model.codigo} />
                </div>
                <div className="form-label-group">
                    <h3>Valor:</h3>
                    <input onChange={changeModel} className="form-control" name="valor" value={model.valor} />
                </div>
                <button type="submit" className="btn btn-primary btn-block my-2">Salvar</button>
            </form>
        </div>
    )
}