const cart = ["laptop", "tablet", "moniter", "keyboard", "chair", "table"];

api.createOrder(cart, () => {
  api.processPayment(() => {
    api.showOrderSummary(() => {
      api.updateWallet(() => {
        api.sendEmail(() => {
          console.log("Order Completed");
        });
      });
    });
  });
});
