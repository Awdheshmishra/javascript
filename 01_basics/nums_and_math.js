const score = 400
console.log(score);  //ye number hai lekin aise show nhi hota specificly 

const bal = new Number(100)
console.log(bal) // ye specifecly define krega ki ye number hai

console.log (bal.toString().length)//ye string ban gaya ab isme ham bhaot se method ka use kar skte hain

console.log(bal.toFixed(1))

const othernumber = 123.534
console.log(othernumber.toPrecision(2))

const hun = 1000000
console.log(hun.toLocaleString('en-IN'))


//        maths

console.log(Math)
console.log(Math.abs(-13))
console.log(Math.round(2,5))
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
