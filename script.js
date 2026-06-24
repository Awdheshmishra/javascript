// let ab= document.getElementById("ab")

/* function handleClick(){
    const element = document.getElementById("first")
    element.textContent= "strike is comine"
} */

/* const element = document.getElementById("first")
element.onclick = function handleClick(){
    element.textContent = "Strike is Coming"
}
    ye wala chlega  isliye ise bhi consider nhi krte
element.onclick = function handleClick(){
    element.textContent = "i am the best"
} */

    //good method to use 
/* const element = document.getElementById("first")
element.addEventListener('dblclick',()=>{
    element.textContent ="strike is coming";
})
element.addEventListener('click',()=>{
    element.style.backgroundColor="brown"
}) */

/* const child1= document.getElementById("child1")
child1.addEventListener('click',()=>{
    child1.textContent = "I am clicked"
}) */

   /*  const parent = document.getElementById("parent")
    console.log(parent.children)

    for(let child of parent.children){
        child.addEventListener('click', ()=>{
            child.textContent = "i am clicked"
        })
    }
 */

    const grandparent = document.getElementById("grandparent")
    grandparent.addEventListener('click',(e)=>{
        //console.log("grandparent is clicked")
        // console.log(e)
        console.log(e.target)
    },)

    /* const parent = document.getElementById("parent")
    parent.addEventListener('click',(e)=>{
       // console.log("parent is clicked")
    //    console.log(e)
    })//},false)
 */
    /* const child = document.getElementById("child")
    child.addEventListener('click',(e)=>{
        //console.log("child is clicked")
        // console.log(e.target)
    })//},true)
 */
    //capture phase on hai : top se doen aaoge :  us time pe event ko trigger kar diya jayyega
    //capture phase off hai :  event hai usko doen to up (bubbling phase) tab trigger kiya jayegaw

    //capture upar se neeche aaata hai jyde use nhi true,false
    //bubbleing neeche se upar jata hai 
