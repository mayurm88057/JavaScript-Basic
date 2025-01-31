const cart = ["shoes", "pant", "Kurta"];

createOrder(cart, function (orderId) {
    proccedToPayment(orderId, function (paymentInfo) {
        showorderSummary(paymentInfo, function () {
            updateWalletbalance();


        });

    });


});

createOrder(cart)
.then((orderId) => proccedToPayment(orderId))
.then((paymentInfo)=>showorderSummary(paymentInfo))
.then((paymentInfo)=>updateWalletbalance(paymentInfo));
