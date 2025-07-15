
// first we learn about Promise Creation and then Promise Consumption

// Promise Creation:

/* Promise - 1 */

// const promiseOne = new Promise( function(resolve, reject){
//     // Do async Task
//     // DB calls, Network, Cryptography

//      setTimeout(()=>{
//         console.log('Async Task is Completed');

//     //connect with then method when Promise consumed 
//       resolve();
//      }, 1000);    
// });

// promiseOne.then(()=>{
//     console.log('Promise 1 is Consumed!');
// })


/* Promise - 2 */

// new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log('Async Task 2 Completed');
//         resolve();
//     }, 1000);
  
// }).then(()=>{
//     console.log('Promise 2 is  Consumed!');
// })


/* Promise - 3 */

// const promiseThree = new Promise( function(resolve, reject){
//     setTimeout(()=>{
//         resolve({username:'Sharif49', email: 'Sharif@example.com'})
//     }, 1000)
// });

// promiseThree.then( function(user){
//     console.log(user);
// });


/* Promise - 4 */
// const promiseFour = new Promise( (resolve, reject)=>{
//     setTimeout(()=>{
//         let error = false;
//         if(!error){
//             resolve({username: 'Sharif', email: 'Sharif433742@gmail.com'});
//         }else{
//             reject('ERROR: Something went wrong!');
//         }
//     }, 1000)
// });


/*
  promiseFour.then().catch()
  .then() chaining means first .then() theke return value 2nd .then() e jabe and 
  2nd .then() er return value 3rd .then() e jabe

  // finally alway executed just like default either resolve or reject . Finally always 
    executes.

*/
 
// promiseFour
// .then( (user)=>{
//     console.log(user);
//     return user.username;
// })
// .then( (username)=>{
//     console.log(username);
// })
// .catch((error)=>{
//     console.log(error);
// })
// .finally(()=> console.log('The promise is either resolve or reject. '));


//promise - 5

const promiseFive = new Promise( (resolve, reject)=>{
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({username: 'JavaScript', password: '12345'})
        }else{
            reject('ERROR: Something in JS went Wrong')
        }
    }, 1000);
});

async function consumePomiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
    }catch(error){
        console.log(error);
    }
};

// consumePomiseFive();


/* fetch api data by async wait */

// async function getAllUsers(){
//     try {
//         // 3rd party api use korteci so may be need time that's why use await
//        const response = await fetch('https://jsonplaceholder.typicode.com/users')

//        // Eventhough it takes time response to convert json format 
//        const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log('E: ', error);
        
//     }
// }

// getAllUsers();


/* Same thing we want do by .then or .catch more easier
  don't need async await 
*/

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
});