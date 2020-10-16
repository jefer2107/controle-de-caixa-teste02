const user = [
    {
        id:"0",
        nome:"jefferson",
        email:"jefer210784@gmail.com",
        senha:"123321"
    }
]

let numberId;

export const userRegister = (model)=>{
    model.id = numberId++
    const verifyRegister = user.find(e=>e.email === model.email)

    if(model.nome == "" || model.email == "" || model.senha == "") return Promise.reject("Primeiro deve preencher os campos vazios")
    if(model.email.length > 30) return Promise.reject("O email deve conter até 30 caracteres")
    if(model.senha.length !== 6) return Promise.reject("A senha deve conter 6 caracteres")
    if(verifyRegister) return Promise.reject("Este email já foi cadastrado")

    user.push(model)
    return Promise.resolve()
}

export const returnItem = ()=>{
    return Promise.resolve(user)
}