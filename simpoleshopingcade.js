const shoppingcart=[
    {name:'sart',price:1200, Quantity:2},
    {name:'shwo',price:2200, Quantity:5},
    {name:'pent',price:3700, Quantity:4},
    {name:'belt',price:600 , Quantity:3},

    
];
function totalCost(products){
   let sum=0;
    for(let i=0; i <products.length; i++){
        const product=products[i];
        const productTotal=product.price * product.Quantity;
        sum = sum+productTotal;
        // console.log(product);
    }
    return sum;
}

const expense=totalCost(shoppingcart);
console.log(expense);