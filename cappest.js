const phone=[
    {name:'sumsong',camera:32, storege:'32gb',price:36000,color:'silver'},
    {name:'i phone',camera:32, storege:'32gb',price:82000,color:'black'},
    {name:'xowmi',camera:32, storege:'32gb',price:38000,color:'aqowa'},
    {name:'oppo',camera:32, storege:'32gb',price:40000,color:'goldenr'},
    {name:'redmi',camera:32, storege:'32gb',price:37000,color:'blue'},
    {name:'relme',camera:32, storege:'32gb',price:38000,color:'nigtblue'},
    {name:'nokeia',camera:32, storege:'32gb',price:42000,color:'red'},
    {name:'vivo',camera:32, storege:'32gb',price:20000,color:'white'}
 
];
function cepestphone(phones){
    let cepest=phones[0]
    for(let i =0; i < phones.length; i++){
       const phone=phones[i]
       if(phone.price <cepest.price){
        cepest=phone;
       }
    }
    return cepest;
}

const mySelection=cepestphone(phone);
console.log(mySelection);