console.log("hello world")

//code
/*const p1 = fetch("https://api.github.com/users")
//console.log(p1)  --> pending
//promise ki 3 state hoti --> pending, fullfilled, reject 

//fullfilled,reject
const p2 = p1.then((response)=>{
    // console.log(response.json())
    return response.json() //js ke objct ke andr convert hota hai -->  byte se 
})
p2.then((response)=>{
    console.log(response)
})
// console.log(p2) */

//promise chaning

 fetch("https://api.github.com/users")
.then((response)=>{
    return response.json()
})
.then ((data)=>{
    // console.log(data)
    const parent = document.getElementById("first")
    for(let i=0;i<data.length;i++){
    const image = document.createElement('img')
    image.src = data[i].avatar_url
    image.style.height = "40px"
    image.style.width = "40px"

    parent.append(image)
    }
})


console.log("hello world 2.0")

//json ko sari langauge samjhti hain universal hai ye 

/* const j1 = {
    name: "rohit",
    age: 30,
    addressss: "dwarka",
    c: undefined
}
const jsonformat = JSON.stringify(j1)
console.log(jsonformat) */