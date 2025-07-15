// for of loop 

// for an array
// let myArray = [1, 3, 5, 7, 9];

// for(let num of myArray)
//     {
//         console.log(num);
//     }

// for an string 

let myStr = "Hello World!";

for (const char of myStr) {
    // console.log(`Each Character is : ${char}`);
}

/* For Map  */
// key- value
let myMap = new Map();
myMap.set('BD', 'Banglades')
myMap.set('Pak', 'Pakistan')
myMap.set('IN', 'INDIA')

for(const [key,value] of myMap)
  {
        // console.log(key, ':- ', value);
  }


  /* for object we can't iterate like this */
  let myObj = {
     "name": 'Sharif',
     "Reg": '2020331049'
  }

// got error
//   for(const element of myObj)
//     {
//         console.log(element);
//     }

/* for of loop er maddhome object iterate kora jay  na . tobe for
  in loop er madhhome iterate kora jay */