const myNums = [1, 2, 3];

 /* .reduce( (accumulator , item)=>  )  */
 /* object_name.reduce( funtion defination, accumulator initial value) */
 /* firstly set accumulator = initial value, then accumulator change with   {accumulator = accumulator + item}.
  At last return accumulator value.   */

// const totalNum = myNums.reduce( function(accumulator, item)
// { return accumulator + item},
//  0);
//  console.log(totalNum);

// const totalNum = myNums.reduce( (acc, item)=> acc + item, 0);
// console.log(totalNum);

const totalNum = myNums.reduce(
    (acc, item)=>{
        // console.log(`accumulator is ${acc}`);
        // console.log(`item is ${item}`);
        return acc + item;
    },
    0  // initial value;
)

// console.log(`total sum is ${totalNum}`);




const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

// console.log(priceToPay);
