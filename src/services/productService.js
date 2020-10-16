const product = [
    {
        nome:"arroz",
        tipo:"alimento",
        codigo:"111111",
        valor:"50"
    }
]

export const productRegistration = (item)=>{
    const verifyItem = product.find(e=>e.codigo === item.codigo)

    if(verifyItem) return Promise.reject("Código de barras já cadastrado")

    product.push(item)

    return Promise.resolve()
}

export const returnItem = ()=>{
    return Promise.resolve(product)
}