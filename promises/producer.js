const cart = ["pants", "kurtas"];

const validateCart = (cart) => {
  if (cart.length === 0) {
    return false;
  }
  return true;
};

const createCart = (cart) => {
  const promise = new Promise((resolve, reject) => {
    if (!validateCart(cart)) {
      const error = "cart is invalid";
      reject(error);
    }
    setTimeout(() => {
      resolve("12345");
    }, 5000);
  });
  return promise;
};

const proceedToPayment = (orderId) => {
  return new Promise((resolve, reject) => {
    if (orderId) {
      resolve("payment done");
    }
    reject("OrderId is missing");
  });
};

const orderSumamry = (paymentStatus) => {
  return new Promise((resolve, reject) => {
    if (paymentStatus) {
      resolve("order summary");
    }
    reject("payment failed");
  });
};

createCart(cart)
  .then((orderId) => {
    console.log(orderId);
    return proceedToPayment(orderId);
  })
  .then((paymentStatus) => {
    console.log(paymentStatus);
    return orderSumamry(paymentStatus);
  })
  .then((summary) => {
    console.log(summary);
  })
  .catch((err) => console.log(err));
