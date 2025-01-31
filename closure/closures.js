// function x(){
//     var a =7;
//     function y(){
//         console.log(a);
     
//     }
//     y();
// }
// x();

// what is closure 
// closure is a function along with the lexical enviroment in which they are bundled together 

// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
// return y;
// }
// var z =x();
// console.log(z);
// z();

// function x(){
//     var a = 10;
//   function y(){
//     console.log(a);

//   }
//   return y;
// }
// var z =x();
// console.log(z);
// z();



// in this program the the retunr keyword is the part of function

function x(){
    var a =100 ;
    return function y(){
        console.log(a);
        }
}
var z =x();
console.log(z);
z();
