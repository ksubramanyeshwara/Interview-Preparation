# Callback Function

## Callback Function

Callback function is a function that is passed as an argument to another function and executed after the parent function completes its task.

null vs undefined:

- `null` represents an intentional absence of any object value.
- `undefined` represents an intentional absence of any value.

feedback from interview team -> null
hr -> job hai -> null
what is the interview result -> undefined

## Callback hell

Callback hell is a situation in which you have multiple nested callbacks, making the code difficult to read and maintain.

```js
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
```

### Inversion of Control

Inversion of control is a design pattern that allows a function to control the flow of execution of another function.
It's like HR telling don't call us, we will call you.