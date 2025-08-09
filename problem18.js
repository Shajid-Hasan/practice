function make_avg(value){
    let sum = 0;
    for(const number of value){
        sum = sum + number;
        console.log(sum); 
    }
    return sum;
}


const value = [18, 14, 32, 11, 41];
const avg = make_avg(value);
const len = value.length;
console.log("Length of this array : ", len);
console.log("Average value : ", avg);