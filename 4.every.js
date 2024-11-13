let arr = [1,2, 3, 4, 5, 6, 7, 8];

let check = arr.every(
    (arr)=> {
        return arr <= 10
    }
)
console.log(check);

let num = [12,14,16,18,20];
let check1 = num.every(
    (arr)=>{
        return num<=13
    }
)

console.log(check1);

let value= [123,345,456,678,789]
let value2 =value.every(
    (value)=>{
        return value<=234
    }
)
console.log(value2);