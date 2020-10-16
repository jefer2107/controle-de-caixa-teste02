


export const authenticateUser = (email, senha)=>{

    if (email === "" || senha === "") return Promise.reject("Primeiro deve preencher os campos vazios")
    if (email.length > 100) return Promise.reject("O email deve conter até 30 caracteres")
    if (senha.length !== 6) return Promise.reject("A senha deve conter no máximo 15 caracteres")
    return Promise.resolve()
}
