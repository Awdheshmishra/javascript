let fruits = ["mango","banana","orange", "grappes"]

//for of loop
for(let item of fruits){
    console.log(item)
    
}//ye loop values deta hai

//for in loop
for(let item in fruits){
    console.log(item)
}//ye loop indedx deta hai 


//for each loop

fruits.forEach((curElem, index, arr) => {
    console.log(`${curElem} ${index}`);
});
