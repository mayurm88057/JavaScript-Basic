/*
what is Async ?
aysnc is keyword that is used with the function,a
wait can be only used inside the aysnc function to 
handle promise ,promise is asyncrohnouse function 

what is Await ?

how is Async Await works behind the scence
Error handling
Interivews
Async await  vs promise.then/.catch



async return always a promise



*/

const p = new Promise((resolve ,reject)=>{
    resolve("Promise resolved value!!")
    
});

//always return a promise
async function getdata(params) {
return p;
 }

const dataPromise= getdata();

dataPromise.then(res =>console.log(res))
 console.log(data);
