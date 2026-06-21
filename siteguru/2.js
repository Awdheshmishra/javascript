const users = [
{id: 1, name: 'john', age: 20},
{id: 2, name: 'jane', age: 17},
{id: 3, name: 'Mike', age: 25}
];
//keep only users whose age is 18 or above 
const adults = users.filter(user =>{
return user.age >= 18;
});
console.log(adults);