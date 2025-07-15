/* Mostly we use for each loop . */

const codding = ['js', 'java', 'python', 'cpp', 'ruby'];

/* Inside forEach() parenthesis we have to provide call back function.
   call back function has no name. 
   Inside function() parenthesis we have to provide a variable name which 
   contain each item of an array */

   // codding.forEach( function(item)
// {
//     console.log(item);
// })



/* We can Use  arrow function in place of call back function */

// codding.forEach( (item)=>{
//     console.log(item);
// }
// )

/* We also define a parameterized function separately and pass only 
   reference**  of that function */

   // function printMe(item)
   // {
   //    console.log(item);
   // }
   // /* Just pass only reference not execution */
   // codding.forEach(printMe)


   /* It is not only pass value also pass index and array reference */
   // codding.forEach( (item, index, arr)=>{
   //    console.log(item, index,  arr);

   // }) 


   /* Most  ***important***  we can get access by forEach loop  from 
      array of objects */
  
    const arrayObj = [
       {
         languageName : 'JavaScript',
         Extension : 'js'
       },
       {
         languageName: 'C++',
         Extension: 'cpp'
       },
       {
         languageName : 'Java',
         Extension : 'java'
       }
    ]

    arrayObj.forEach( (item)=>{
      console.log(`${item.languageName} Extension is ${item.Extension}` );
    }
   )
