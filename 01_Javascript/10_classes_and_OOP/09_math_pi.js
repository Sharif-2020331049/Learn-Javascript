
const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(descriptor);


// can't change it cause constant
// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);


// const newObj = Object.create(null)   // by default null ei thake


const chai = {
    name : 'Ginger Chai',
    price : 250, 
    isAvilable: true,

    orderChai: function(){
        console.log('Chai nehi bani');
    }

    
}

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

// but I want to change it
// Object.defineProperty(className, which propertey, { changes })

// Object.defineProperty(chai, 'name', {
//     writable: false,
//     enumerable: false
// });

// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));


// If I don't want iterate of some property  ->> enumerable : false
Object.defineProperty(chai, 'name', {
    enumerable: false
});

for (let [key, value] of  Object.entries(chai)) {
    if( typeof value !== 'function'){
        console.log(`${key}: ${value}`);
    }
}