const product = [
    {
        id:"0",
        nome:"arroz",
        tipo:"alimento",
        codigo:"111111",
        valor:50
    },
    {
        id:"1",
        nome:"detergente",
        tipo:"limpeza",
        codigo:"222222",
        valor:20
    },
    {
        id:"2",
        nome:"biscoito",
        tipo:"alimento",
        codigo:"333333",
        valor:5
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

export const cancelItem = (item)=>{
    const itemToBeCanceled = product.find(e=>e.codigo === item)

    if(itemToBeCanceled) return Promise.reject()
    
    product.push(itemToBeCanceled)
    return Promise.resolve()
}

export const returnItem = ()=>{
    return Promise.resolve(product)
}

export const returnItemById = (id)=>{
    const itemToBeReturn = product.find(e=>e.id == id)

    if(itemToBeReturn) return Promise.resolve(itemToBeReturn)
}

export const returnItemByCode = (codigo)=>{
    const codeToBeReturn = product.find(e=>e.codigo === codigo)

    if(!codeToBeReturn) 
        return Promise.reject()
    else
        return Promise.resolve(codeToBeReturn)
}

export const removeItem = (item)=>{
    const itemToBeRemoved = product.findIndex(e=> e.codigo === item)

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