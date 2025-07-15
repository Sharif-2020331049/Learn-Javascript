const shoppingCart = [
    {
        itemName: 'JS course',
        price : 1000
    },
    {
        itemName: 'Date Science',
        price : 1034
    },
    {
        itemName: 'Wev Dev',
        price : 1045
    }
]

const haveToPay = shoppingCart.reduce((acc, item)=>{return acc+item.price}, 0)
console.log(haveToPay);
