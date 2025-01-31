//Event Loop using the callback function

// console.log("start");

// setTimeout(function ab(){
//     console.log("callback");
// },3000);

// console.log("end");


// event loop acts as a gate keeper for the call stack or the (global execution context) and pushes the code and checks the call back queue contains any sort off function in it.
//and display the remaining part.



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// using button example

// console.log(start);

// document.getElementById("btn")
// .addEventListener("click",function cb(){
//     console.log("callback");

// });
// console.log("End");


// console.log("start");

// document.getElementById("btn")
// .addEventListener("click",function cb(){
//     console.log("callBAck");
// });
// console.log("End");


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Example Using the </Fetch>


console.log("start");

setTimeout(function callbackteam(){
    console.log("Call back setTimeOut");
},5000);

fetch("http://api.netflix.com").then(function cbF(){
    console.log("cb Netflix");
});
console.log("End");

//all the function or the call back is given the priority due to Microtask Queue  that entrys the call stack first 


// what can be entered in the microTAsk Queue
//Answer:- all the callback function comes through promises will enters the micro Task queue andthere will be mutation observer

