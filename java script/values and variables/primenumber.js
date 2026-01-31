let num = 84;
var isprime = true;
for(var i = 2; i<num; i++){
    if(num%i==0){
        isprime = false;
        break;
    }
}
if(isprime){
    console.log("num is prime");
    
}else{
    console.log("num is not prime");
    
}
