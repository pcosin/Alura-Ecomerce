
const createProductsStar = (array) => {
    const starProductsDOM = document.querySelector("[data-starWars]")
    
     array.forEach((product) => {
        if(product.category === "star-wars") {
        let div = document.createElement("div");
        div.classList.add("card")
        div.innerHTML = ` 
        <img src="${product.img}" alt="">
        <h4 class="tittle">${product.name}</h4>
        <div class="price">$ ${product.price}</div>
        <a href="">Ver producto</a>
    
        `
        starProductsDOM.appendChild(div)}
     })
     
}

const createProductsConsole = (array) => {
    const consoleProductsDOM = document.querySelector("[data-console]")
    
     array.forEach((product) => {
        if(product.category === "console") {
        let div = document.createElement("div");
        div.classList.add("card")
        div.innerHTML = ` 
        <img src="${product.img}" alt="">
        <h4 class="tittle">${product.name}</h4>
        <div class="price">$ ${product.price}</div>
        <a href="">Ver producto</a>
    
        `
        consoleProductsDOM.appendChild(div)}
     })
     
}

const createProductsDiversos = (array) => {
    const diversosProductsDOM = document.querySelector("[data-diversos]")
    
     array.forEach((product) => {
        if(product.category === "diversos") {
        let div = document.createElement("div");
        div.classList.add("card")
        div.innerHTML = ` 
        <img src="${product.img}" alt="">
        <h4 class="tittle">${product.name}</h4>
        <div class="price">$ ${product.price}</div>
        <a href="">Ver producto</a>
    
        `
        diversosProductsDOM.appendChild(div)}
     })
     
}



createProductsStar(Products)
createProductsConsole(Products)
createProductsDiversos(Products)