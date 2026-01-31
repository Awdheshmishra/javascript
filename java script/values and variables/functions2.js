function calculator(a, b, operator){
    let result;
    switch(operator){
        case "+":
        return a+b;
        
        case"-":
        return a-b;
        
    
        default:
            return("no operatoor found");
    }
}
    
    console.log(calculator(2,4,"-"))
    console.log(calculator(4,4,"+"))
    


