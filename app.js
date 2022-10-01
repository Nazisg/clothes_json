let box = document.getElementById("box")

fetch("https://fakestoreapi.com/products")
.then(res => {
    console.log(res)
    if (res.ok == true && res.status === 200) {
        return res.json()
    } 
})
.then(res => {
    res.forEach(index => {
        console.log(index)
        box.innerHTML += `<div class="obyekt">
        <a class=card href="about.html?id=${index.id}"> 
            <img width="200px" height="200px" src="${index.image}">
            <h3>New Season</h3>
            <h2>${index.title}</h2>
            <h3>${index.category}</h3>
            <h3>$${index.price}</h3>
        </a>
    </div>`
    })
})

let back = document.getElementById("back")
let next = document.getElementById("next")
let img = document.getElementById("img")
next.addEventListener("click", () =>{
    img.scrollBy(1200, 0);
})
back.addEventListener("click", () =>{
    img.scrollBy(-1200, 0);
    
})

let box2 = document.getElementById("box2")

fetch("https://fakestoreapi.com/products")
.then(res => {
    console.log(res)
    if (res.ok == true && res.status === 200) {
        return res.json()
    } 
})
.then(res => {
    res.forEach(index => {
        console.log(index)
        box2.innerHTML += `<div class="obyekt">
        <a class=card href="about.html?id=${index.id}"> 
            <img width="200px" height="200px" src="${index.image}">
            <h2>${index.title}</h2>
            <h3>${index.category}</h3>
            <h3>$${index.price}</h3>
        </a>
    </div>`
    })
})

let imgs = document.getElementById("imgs")

fetch("https://fakestoreapi.com/products")
.then(res => {
    console.log(res)
    if (res.ok == true && res.status === 200) {
        return res.json()
    } 
})
.then(res => {
    res.forEach(index => {
        console.log(index)
        imgs.innerHTML += `<div class="obyekt">
        <a class=card href="about.html?id=${index.id}"> 
            <img width="200px" height="200px" src="${index.image}">
            <h3>New Season</h3>
            <h2>${index.title}</h2>
            <h3>${index.category}</h3>
            <h3>$${index.price}</h3>
        </a>
    </div>`
    })
})


let boxes = document.getElementById("boxes")
document.addEventListener('scroll', () =>{
// boxx.style.overflow="hidden"
    boxes.classList.add('scrool')
})