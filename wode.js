function woodCalculeter(chairQuantity,tableQuantity,badQuantity){
    const parChairwood=3;
    const parTablewood=10;
    const parBadwood=50;
    const chairWood=chairQuantity*parChairwood;
    const tableWood=tableQuantity*parTablewood;
    const badWood=badQuantity*parBadwood;

    // console.log(chairQuantity,tableQuantity,badQuantity);
    const totalWood=chairWood+tableWood+badWood;
    return totalWood;
}
const totalWood=woodCalculeter(2,2,5);
console.log('total wood requerd',totalWood);