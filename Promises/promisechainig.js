const cart = ["Shoes", "Pants", "kurta"];

createOrder(cart)
    .then(function (orderId) {
        console.log(orderId);
        return orderId;
    })
   
    .then(function (orderId) {
        return proccedTopayment(orderId);
    })
    .then(function (paymentInfo) {
        console.log(paymentInfo);
    })
    
    //  .catch(function (err) {
    //     console.log(err.message)

    // })
    .then(function (orderId){
        console.log("Hello mayur ");

    });

function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        // write a function CreateOrder Valid
        //validate Cart
        // order id is reqaired 
        if (!validateCart(cart)) {
            const err = new Error("cart is not valid");
            reject()
        }
        //logic for create Order
        const orderId = "12345";
        if (orderId) {
            setTimeout(function () {
                resolve(orderId);
            }, 1000);

        }

    });

    return pr;


}

function proccedTopayment(orderId) {
    return new promise(function (resolve,reject) {
        resolve("payment successful");
    });

}

function validateCart(cart) {
    return false;
};