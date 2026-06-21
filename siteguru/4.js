const users = [
{ id: 1, city: 'Delhi' }, 
{ id: 2, city: 'Mumbai' },
{ id: 3, city: 'Delhi' },
{ id: 4, city: 'Lucknow' },
{ id: 5, city: 'Mumbai' }
];
//Build an object containing city-wise user count 
const citycount = users.reduce((result, user) => {
//if city does not exist, initialize count with 0
if (!result[user.city]){
result[user.city] =0;
}

//Increase count for current city 
result[user.city]++;

return result;
}, {});

console.log(citycount);
