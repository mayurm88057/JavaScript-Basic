

// function x(){

//     var i =1;
//     setTimeout(function(){
//         console.log(i);
//     },1000);
//     console.log("learn javaScript with mayur ")
// }
// x();


// write the code for the question normal setime out function 


// function z(){
//     var i ="welcome to kingdom";
//     setTimeout(function(){
//         console.log(i);

//     },3000);
//     console.log("hllo");

// }
// z();

// write a code to 1 2 3 4 5 with set time out 


// function z(){
//  for(var i =1;i<=5;i++){

//     function close(z){
//         setTimeout(function(){
//             console.log(z);
//         },z* 1000);
      
//     }
//     close(i);
// }
// console.log("Hello mayur")
    
// }
// z();


// write the code using the let keyword

// function a(){
//     for (let i=1 ;i<=5; i++){
//         setTimeout(function(){
//             console.log(i);

//         },i*1000);
//         console.log("hello to javascipt");

//     }
// }

// function x(){
//     for(let i=1;i<=5 ;i++){
//         setTimeout(function(){
//             console.log(i);

//         },i*1000);
//     }
//         console.log("hello mayur")  
    // }
// x();



// code

// function a(){
//     for (let i=1;i<=5;i++){
//         setTimeout(function(){
//         console.log(a);

//         },a*2000);

//     }
//     console.log("learn javaScript with mayur");
// }
// a();




// block in the main thread

console.log("start")

setTimeout(function cb(){
    console.log("call back");

},5000);
console.log("End")

let startDate = new Date().getTime();
let endDate = startDate;

while(endDate < startDate + 10000){
endDate = new Date().getTime();
}

console.log("While Expired")
