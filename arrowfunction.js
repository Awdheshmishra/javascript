const greet = () => "hello"
console.log(greet())  //no parameters

const add = (a,b,c,d) => a+b-c*d
console.log(add(10,2,3,4)) // with parameters

const multiply = (a, b) => {
  const result = a * b
  return result
}
console.log(multiply(4,6)) 



function Timer() {
  this.seconds = 0;
  this.count = 0;
  setInterval(() => {
    this.seconds++;
    this.count++;
    console.log(this.seconds);
    if(this.count ===20){
        clearInterval(intervalId)
        console.log("stopped at 20")
    }
  }, 1000);
}

const timer = new Timer();

