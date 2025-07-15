// for object iterate we use "for in " loop

//* for in loop */

const myObject = {
    Name : "Sahidur Rahman", 
    Registration_Number : '20220331049',
    Department : 'CSE'
}

for(const key in myObject)
    {
        /* Just print all key in myObject */
        // console.log(key);

        /* key along with value */
        // console.log(`${key} is ${myObject[key]} `);
    }
 
 const myObj2 = {
     js : 'JavaScript',
     cpp : 'C++',
     py : 'Python',
     java: 'Java',
     kt : 'Kotlin'
 }   

 for(const key in myObj2)
    {
        // console.log(`${key} extension for ${myObj2[key]}`);
    }

 /* for in loop for array */
 
 const programming = ["JavaScript", "C++", "Java", "Python"];

 for(const key in programming)
    {
        /* for array key for array  is just index of array */
        // console.log(key);

        // console.log(programming[key]);
    }

  /* for in loop in map->  we can't use cause map is not iterateable.
     Don't show error also don't iterate and show anything inside loop.  */  

  const myMap = new Map();
   myMap.set('BD', 'Bangladesh');
   myMap.set('IND', 'INDIA');
   myMap.set('PAK', 'Pakistan');

//    for(const key in myMap)
//     {
//         console.log(key);
//     }
