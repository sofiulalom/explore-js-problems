function add(num1, num2){
    if (typeof num1  !== 'number' || typeof num2 !== 'number') {
        return "pless enter a number"
    }
    return num1+num2;
}
const result=add(false, 45)
// console.log(result);

function multyfile(num1 ,num2){
    return num1 *num2;

}

const output=multyfile(12,45);
console.log(output);