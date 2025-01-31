/*Find the maximun amoung the given array

const arr=[3,4,5,2,6,7,8,9]
function findmax(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findmax(arr));
const output = arr.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
}, 0);
console.log(output);*/


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++zc
// Example of proper reduce Function of reduce

/*const arr = [2, 4, 5, 6, 7, 6];

function findmax(arr) {
}

// console.log(findmax(arr));
const output = arr.reduce(function (max, curr) {
    if (curr > max) {
        max = curr;

    }
    return max;
}, 0)
console.log(output);*/

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/* write a code to find the names using map */

const users=[{firstname:"mayur", lastname:"mogre" ,age:26},
{firstname:"Rahul", lastname:"sharma" ,age:43},
{firstname:"Swapnil", lastname:"ghule" ,age:39},
{firstname:"saloni", lastname:"jadhav" ,age:34},
];

// list of full names
const output=users.map (x => x.firstname + x.lastname);

console.log(output);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// write a program using reduce function to show the age of the given how many people ave the same age



/*
const users=[
    {firstname:"mayur", lastname:"mogre" ,age:26},
    {firstname:"Rahul", lastname:"sharma" ,age:43},
    {firstname:"Swapnil", lastname:"ghule" ,age:39},
    {firstname:"saloni", lastname:"jadhav" ,age:26},
    ];
//write a code to print{26:1, 43:1 ,39:1 }
const output =users.reduce(function(acc,curr){
    if(acc[curr.age]){
   acc[curr.age]= ++acc[curr.age];
 }
    else{
        acc[curr.age]=1;
    }
    return acc;
},{});
console.log(output);
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/

// write a code to filter just the name

/*
const users = [
    { firstname: "mayur", lastname: "mogre", age: 26 },
    { firstname: "Rahul", lastname: "sharma", age: 43 },
    { firstname: "Swapnil", lastname: "ghule", age: 39 },
    { firstname: "saloni", lastname: "jadhav", age: 26 },
];


const output = users.filter((x) => x.age < 30)
.map((x) => x.firstname);
console.log(output);

*/

