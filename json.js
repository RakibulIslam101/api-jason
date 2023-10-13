const user = {
    id : 1,
    name : 'Gorib Amir',
    job : 'actor'
};
// JavaScript Object Notation(JSON)
const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);


const shop = {
    owner: 'Rakib', 
    address:{ 
    street:'Shewrapara prem goli',
    city: 'Dhaka',
    country: 'Bangladesh'
},
    product: ['laptop', 'desktop','mouse', 'monitor', 'keyboard'],
    revenue: 100000,
    isOpen: true,
    isNew: false
};
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);