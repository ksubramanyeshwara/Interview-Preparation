# Closure

Closure is a function that has access to its parents lexical environment, even after the parent function has executed.

In closure is a function can remember and access variable from an outer function's scope even after outer function has complted the execution.

> Function + its parent's lexical environment's reference = Closure

> Closure is always going to use the most up-to-date value.

## Uses of Closure

- Data Encapsulation / Privacy
  - Variables inside the closure are not accessible from outside, providing a way to create private variables.
- Data Hiding
  - You can hide the implementation details of a function from the outside world.
- Stateful Functions
  - You can keep track of values across function calls.
- Functional Programming
  - Enables higher-order functions, callbacks, and function factories.

## Disadvantages of Closure:

- Over consumption of memory
- Memory Leak
