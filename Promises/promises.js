const cart =["shoes","pants","krta"];

createOrder(cart,function(orderId){
    proceedTopayment(orderId);
}); 


const promise = createOrder(cart);

// {data: order-Details}

promise.then(function(){
    proceedTopayment(orderId); 
}); 


/*
what is promise ? 
promise is object which respresenting the 
eventual completion of an 
asynchronnous operation 


there are 3 states that it can have 
Pending 
fulfied 
rejected

promises are immutable

*/


// const GITHUB_API="https://github.com/mayurm88057/Advance-JAVASCRIPT.git"

// const user = fetch(GITHUB_API);

// console.log(user);







