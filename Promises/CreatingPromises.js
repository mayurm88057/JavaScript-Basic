const cart =["Shoes","Pants","kurta"];

const promise =createOrder(cart);
// console.log(promise);


promise
.then(function(orderId){
    console.log(promise);
    //proccedTOpayment(OrderId);
}).catch(function(err){
console.log(err.messa)
})
function createOrder(cart){
const pr = new Promise(function(resolve,reject){
     // write a function CreateOrder Valid
     //validate Cart
     // order id is reqaired 
     if(!validateCart(cart)){
        const err =new Error("cart is not valid");
       reject()   
     }
     //logic for create Order
     const orderId ="12345";
  if(orderId){
    setTimeout(function(){
        resolve(orderId);
    },5000);
         
     }

    });

    return pr;

   
}

function validateCart(cart){
return true;
}