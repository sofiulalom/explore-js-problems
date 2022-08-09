function teketPrice(tiketQantity){
    const first100Rate=100;
    const secend100Rate=90;
    const resttiketRate=70;
    if (tiketQantity <= 100) {
        const price=tiketQantity *first100Rate;
        return price;
    }else if(tiketQantity <=200){
        const first100Price= 100 * first100Rate;
        const restticeteQuantity=tiketQantity -100;
        const resttiketPrice=restticeteQuantity * secend100Rate;
         const totalPrice=first100Price +resttiketPrice;
         return totalPrice;
    }else{
        const first100Price=100 * first100Rate;
        const secend100Price=100 *secend100Rate;
        const restticeteQuantity=tiketQantity -200;
        const resttiketPrice=restticeteQuantity * resttiketRate;
        const totalcost=first100Price + secend100Price+ resttiketPrice;
        return totalcost;
    }
}

const price=teketPrice(250);
console.log(price);