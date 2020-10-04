import React from "react"

const user = [
    {
        nome:"jefferson",
        email:"jefer210784@gmail.com",
        senha:"123321"
    }
]

export const authenticateUser = (email, senha)=>{
    const verifyUser = user.find(e=>e.email === email && e.senha === senha)

    if (email === "" || senha === "") return Promise.reject("Primeiro deve preencher os campos vazios")
    if (email.length > 100) return Promise.reject("O email deve conter até 30 caracteres")
    if (senha.length !== 6) return Promise.reject("A senha deve conter no máximo 15 caracteres")
    if (!verifyUser) return Promise.reject("Usuário não autenticado")
    return Promise.resolve()
}

export const returnItem = ()=>{
    return Promise.resolve(user)
}