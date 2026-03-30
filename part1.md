## Part 1: Theoretical Questions
Submit the solution to this part as `part1.md`.

### [25 points] Question 1.1

1. Explain in simple words the following programming paradigms:
   1.1 [5 points] Imperative - Imperative programming is defined by running commands one by one, in a particuler order. For example: Java, Python, C++.
   1.2 [5 points] Object Oriented - An object-oriented language defines data as objects and uses method calls for communication. It leverages inheritance to organize and reuse code efficiently. For example: Java.
   1.3 [5 points] Functional- Functional programming treats a program as a series of expressions to be evaluated for their value, rather than a sequence of commands to be executed. For example: Python, JavaScript.  
2. [5 points] How does the object oriented paradigm improve over the imperative paradigm? OOP improves over imperative programming because it uses objects to group data and methods together. This prevents code duplication and makes it easier to reuse code.
3. [5 points] How does the functional paradigm improve over the object oriented paradigm? Functional programming improves over OOP by using pure functions and immutable data, which prevents logical bugs caused by side effects. This makes the code more predictable, easier to test, and naturally safer for parallel processing.

### [10 points] Question 1.2

Consider the following TypeScript function, which calculates the average price of all discounted products in a given inventory.

```ts
type Product = {
  name: string;
  price: number;
  discounted: boolean;
};

const getDiscountedProductAveragePrice = (inventory: Product[]): number => {
  let discountedPriceSum = 0;
  let discountedProductsCount = 0;

  for (const product of inventory) {
    if (product.discounted) {
      discountedPriceSum += product.price;
      discountedProductsCount++;
    }
  }

  if (discountedProductsCount === 0) {
    return 0;
  }

  return discountedPriceSum / discountedProductsCount;
};
```

This function uses an imperative approach with loops and conditional statements.

Refactor the function `getDiscountedProductAveragePrice` to adhere to the Functional Programming paradigm. Utilize the built-in array methods `map`, `filter`, and `reduce` to achieve the same functionality without explicit iteration and conditional checks.
Write the new function under the name `getDiscountedProductAveragePriceFP`.

**Important**: the new function should have the same signature.

**Note**: there are no tests for this question, and it will not be executed. The task here is to write the code in a functional way.

```ts
const getDiscountedProductAveragePriceFP = (inventory: Product[]): number => {
  const isDiscounted= (p: Product) => p.discounted;
  const discountedProducts = filter(isDiscounted,inventory);
  const getPrice=(p:Product) => p.price;
  const prices=map(getPrice,discountedProducts);
  const avg=reduce(+,0,prices);
  return avg/prices.length;
};
```

### [18 points] Question 1.3

Write the most general type for each expression, using type variables where applicable.
Guidelines:

- Arrays must be homogeneous.
- Arithmetic operations must be performed on numbers.
- Use generics where possible.
- Avoid using `any`.

1. [3 points] `(x, y) => x.some(y)` 
(x : T[] , y: (val: T) => boolean) => boolean

2. [3 points] `x => x.map(y => y * 2)`
(x: number[])=> number[]

3. [3 points] `(x, y) => x.filter(y)`
(x: T[] , y:(val: T) => boolean) => T[]

4. [3 points] `x => x.reduce((acc, cur) => acc + cur, 0)`
(x: number[]) => number 

5. [3 points] `(x, y) => x ? y[0] : y[1]`
(x: boolean , y: T[] ) => T

6. [3 points] `(f,g) => x => f(g(x+1))`
(f: (val: T)=>S ,g: (val: number)=>T) => h:(x: number) => S 

