//scope and closure

//global -> accessible to everyone
/* let a = 10;
const b = 20;
console.log(a)
function greet(){
    console.log(a)
}
greet() */
//----------------------------------------------------------------

//local -> only in the block

/* function greet(){
    let c = 30;
    console.log(c)
} */


//console.log(c)  -> error 


function createcounter(){
    let count = 0;
    function increment(){
        count++;
        //console.log("i am a increment function")
        return count;
    }
    return increment;
}
//console.log(count)

const counter = createcounter()
console.log(counter())//1
console.log(counter())//2
console.log(counter())//3     closure ki wjh se output ye aa rha 

//closure-> ek aisa function jo apne outer varibale ko yaad krke rkhta hai even after it is executed
