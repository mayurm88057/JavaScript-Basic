const cart=["shoes","kurat","pants"];

createOrder(cart,function(orderId){
    proceedTopayment(orderId,function(paymentInfo){
      showOrderSummary(paymentInfo,function(){
        updatewalletbalance();

      });  

    });
});

createOrder(cart)
.then(function(orderId){
    proceedTopayment(orderId);
})
.then(function(paymentInfo){
    showOrderSummary(orderId)
})
.then(function(paymentInfo){
    updatewalletbalance(orderId);
});
