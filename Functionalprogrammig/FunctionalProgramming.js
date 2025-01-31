// higher order fucntion 

// function x(){
// console.log("X is a call back function")
// }

// function y (x){
//     x();
// }

//**************************************************************************

const  radius = [3,1,2,4];

const area = function(radius){
    return Math.PI * radius * radius;

};
const circumference = function(radius){
    return 2 * Math.PI * radius;
};

const diameter = function(radius){
    return 2 * radius;

};

const calaculate = function (radius,logic){
    const output=[];
    for(let i =0 ; i < radius.length ; i++){
        output.push(logic(radius[i]));
};
    return output;

};

console.log(calaculate(radius,area));

console.log(calaculate(radius,circumference));
console.log(calaculate(radius,diameter));

// const calaculatearea=  function(radius){
//     const output=[];
//     for(let i= 0 ; i < radius.length ; i ++){
//         output.push(Math.PI* radius[i] *radius[i]);
// };
//     return output
// }
// console.log(calaculatearea(radius));