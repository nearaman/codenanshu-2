---
title: "Most useful JavaScript Array Methods"
date: "2021-07-10"
description: "Array methods that come handy when building your next project these methonds are very helpfull if you work with array and want to solve some good problems"
image: ./learn_javascript.webp
slug: "most-useful-javascript-array-methods"
category: "tutorials"
---

We underestimate what the understanding of basic array methods can do. It saves us a lot of time when building projects. At least, I feel that way, because most of the features that you build in any project boil down to manipulating the array of values.

In this blog, I'll be discussing some array methods which I've found most useful and must know, along with examples.

## **map()**

map() method returns a new array populated with results from calling a function provided for every element in the calling array.

```
    const randomArray =  [4, 3, 6, 1, 2, 7];

    const squareTheNumber = (num) => {
       return Math.sqrt(num);
    }
    const squaredArray = randomArray.map(squareTheNumber);
    console.log(squaredArray);
    // [16, 9, 36, 1, 4, 49]
```

## **forEach()**

forEach() method is similar to map() i.e it runs on each element of the array it is called upon but it doesn't return a new array.

```
    const randomArray =  [4, 3, 6, 1, 2, 7];

    const squareTheNumber = (num) => {
       console.log(Math.sqrt(num));
    }
     randomArray.forEach(squareTheNumber);
    // 16,
    // 9,
    // 36,
    // and so on..
```

## **filter()**

filter() method returns a new array populated with results that satisfy the condition in the given callback function.

```
    const randomArray =  [4, 3, 6, 1, 2, 7];

    const getOddNumbers = (num) => {
       return num%2 != 0;
    }
    const oddNumbersArray = randomArray.filter(getOddNumbers);
    console.log(oddNumbersArray);
    // [3, 1, 7]

```

## **reduce()**

reduce() method returns a single value by executing a reducer function that is invoked on each element of the array.

Note that the reducer function takes in four arguments:

**Accumulator, Current Value, Current Index, Source Array**

The reduce method takes in two arguments - reducer function and an initial Value which is assigned to the accumulator on reducer's first execution.

```
    const randomArray =  [4, 3, 6, 1, 2, 7];

    const getSumReducer = (accumulatedResult, num) => {
       return accumulatedResult+num;
    }
    const result = randomArray.reduce(getSumReducer, 0);
    console.log(result);
    // 23
```

## **find**

find() method returns the value of the first element in the provided array that satisfies the condition in the testing function. If no values satisfy the condition in the testing function, it returns undefined.

```
    const randomArray =  [4, 3, 6, 1, 2, 7];

    const getLessThanTwo = (num) => {
       return num < 2;
    }
    const result = randomArray.find(getLessThanTwo);
    console.log(result);
    // 1
```

## **findIndex()**

findIndex() method returns the index of the first element in the provided array that satisfies the condition in the testing function. If no values satisfy the condition in the testing function, it returns -1.

```
    const randomArray =  [4, 3, 6, 1, 2, 7];

    const getLessThanTwo = (num) => {
       return num < 2;
    }
    const result = randomArray.findIndex(getLessThanTwo);
    console.log(result);
    // 3
```

## **some**

some() method returns a boolean value when some of the elements (at least one) in an array satisfy the condition in the testing function.

```
    const randomArray =  [4, 3, 6, 1, 2, 7];

    const getLessThanTwo = (num) => {
       return num < 2;
    }
    const result = randomArray.some(getLessThanTwo);
    console.log(result);
    // true

```

## **every**

Contrary to some() method, every() methods return true if **all** the elements in an array satisfy the condition in the testing function.

```
    const randomArray =  [4, 3, 6, 1, 2, 7];

    const getLessThanTwo = (num) => {
       return num < 2;
    }
    const result = randomArray.every(getLessThanTwo);
    console.log(result);
    // false
```

## **includes**

includes() methods return true if a certain values exists in the array its called upon, otherwise false.

```
    const randomArray =  [4, 3, 6, 1, 2, 7];

    console.log(randomArray.includes(10))

    // false
```
