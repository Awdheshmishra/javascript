//while loop

var num= 1;
while(num <= 10){
    console.log(num);
    num++;
    
} 

//do-while loop

 var num= 1;
do{
console.log(num);
num++;

}
while(num <= 10)

 
//table 
 var n = 1;
 while(n <= 10){
    console.log("5 *"+ n+ " = "+5*n);
    n++;
    
 } 

 // for loop
  var num=1;
for(num =1;num<=10;num++){
    console.log(num);
}
 
 var sum=0;
debugger;
for(var num=1;num<=10;num++){
    var sum = num+sum;
}
console.log(sum); 
//(;;) used for makig for loop infinity
 


 let userinput;
let positivenumber;

do{
    userinput = prompt("enter any positive number");
    positivenumber = parseFloat(userinput);
}while(isNaN(positivenumber)||positivenumber<0);
console.log("you enterd a valid positive number:", positivenumber);

