//async await
//async function always return a promise
 /* async function greet(){
   // return "rohit"
   return new Promise((resolve, reject)=>{
    resolve("rohit")
   })
}
const response = greet()
response.then((data)=>console.log(data))
.catch((error)=>{
console.log("Error", error);
  }) */

// fetch("https://api.github.com/users")
// .then((response)=>response.json())
// .then((data)=>console.log(data))

//await wait karata hai 
async function github() {
  console.log("executed");
  
  const response = await fetch ("https://api.github.com/users")
const data = await response.json()
console.log(data);
}
github()

console.log('hello ')