const cart = ["chocolates", "sweets", "candies"];

createCart(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentDetails) {
    orderSummary(paymentDetails, function () {
      updateWalletBalance();
    });
  });
});

function orderSummary() {}

const promise = createCart(cart);

promise
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentDetails) {
    return orderSummary(orderDetails);
  })
  .then(function () {
    updateWalletBalance();
  });
