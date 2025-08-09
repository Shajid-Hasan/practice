function multiplyEven(number){
    if(number % 2 === 1){
        console.log("the number is odd :", number);
        const result = number * 2;
        console.log("Multiply by 2 :", result);
        return result;
    }
    else{
        console.log("the number is even :", number);
        const result = number / 2;
        console.log("divided by 2 :", result);
        return result;
    }
}
const number = [110];
const even = multiplyEven(number);
console.log(even);
