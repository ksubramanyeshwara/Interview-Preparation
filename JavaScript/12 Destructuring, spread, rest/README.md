# Destructuring, spread, rest

## Spread Operator

Spread operator is used to expand an iterable(ARRAY or STRING) or properties of an object into individual elements. It used where multiple elements are expected.

## Rest Operator

Collects multiple elements into a single array or object(in destructuring). It is used to collect the remaining elements of an array or object.

**If `...` is on LHS of assignment, it is called Rest Operator.**

```JS
const [first, ...rest] = arr;
const { a, ...others } = obj;
```

**If `...` is on RHS of assignment, it is called Spread Operator.**

```JS
const copy = [...arr];
const merged = { ...obj1, ...obj2 };
```

**If `...` used in function parameter, it is called Rest Parameters.**

```JS
function sum(...nums) {
}
```

**If `...` used in function call, it is called Spread Parameters.**

```JS
const nums = [1, 2, 3];
sum(...nums);
```

## Destructuring

Extracting values from arrays and objects into distinct variables.

### Array Destructuring

- Extract the values from an array based on thier index.
- You can skip values by leaving the variable empty.
- You can assign a default value if the array element is undefined.
- You can collect the remaining elements of an array using the rest operator.

### Object Destructuring

- Extract the values from an object based on thier key.
- You can skip values by leaving the variable empty.
- You can assign a default value if the object property is undefined.
- You can collect the remaining properties of an object using the rest operator.

### Real World use cases

- Extracting values from an API response.
- Extracting values from a user input form.
- Extracting values from a database query result.
- Iterating with for...of and Object.entries() or Map

### Tips

- Order Matters for Arrays, Names Matter for Objects
- If you destructure something that doesn’t exist (e.g., you try to pull a property that isn’t on the object), you’ll get undefined (unless you provided a default).
