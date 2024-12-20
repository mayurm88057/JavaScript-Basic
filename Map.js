// MAP

const arr = [5, 1, 3, 2, 6]

function double(x) {
    return x * 2;
}
function triple(x){
 return x * 3;
}

// function binary(x){
//     return x.toString(2);

// }

// const output = arr.map(double);
// const output =arr.map(binary);

// const output =arr.map(function binary(x){
//     return x.toString(2);

// });

const output =arr.map((x) => x.toString(2));

console.log(output);

