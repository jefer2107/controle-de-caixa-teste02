const product = [
    {
        id:"0",
        nome:"arroz",
        tipo:"alimento",
        codigo:"111111",
        valor:"50"
    }
]

let numberId = 0;

export const productRegistration = (item)=>{
    numberId++
    item.id = numberId
    const verifyItem = product.find(e=>e.codigo === item.codigo)

    if(verifyItem) return Promise.reject("Código de barras já cadastrado")

    product.push(item)

    return Promise.resolve()
}

export const returnItem = ()=>{
    return Promise.resolve(product)
}

export const returnItemById = (id)=>{
    const itemToBeReturn = product.find(e=>e.id == id)

    if(itemToBeReturn) return Promise.resolve(itemToBeReturn)
}

export const removeItem = (item)=>{
    const itemToBeRemoved = product.findIndex(e=> e.codigo === item.codigo)

    if(itemToBeRemoved) 

    product.splice(itemToBeRemoved, 1)
    return Promise.resolve()
}

export const changeItem = (model)=>{
    const itemToBeChanged = product.find(e=>e.id == model.id)

    itemToBeChanged.nome = model.nome
    itemToBeChanged.tipo = model.tipo
    itemToBeChanged.codigo = model.codigo
    itemToBeChanged.valor = model.valor

    return Promise.resolve()
}