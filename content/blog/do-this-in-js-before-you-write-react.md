---
title: Do This in Js Before You Write React
description: things to learn in Javascript before wirte code in React JS
date: 2021-08-22
slug: do-this-in-js-before-you-write-react
category: blog
image: ../assets/do-this-in-js-before-you-write-react.webp
---

So you have started your journey in the web development; awesome. You already know some HTML and CSS that's great. The obvious next step is you must have started learning JavaScript, didn't you? So now you been learning JavaScript for a bit and whilst the process you came across hot terminologies like 'framework' , 'React' that everyone's been talking about. The next thing you know is you left JS in between and jumped on the bandwagon to learn React. Fast forward few months, you end up feeling lost. And yes, you guessed that right, this is the story of my life too, for better or for worse.  
As a matter of fact, let me give you a tour to some quick essentials before you get started with React.

## 1. Spread Operator

The spread come in very handy when you need to manipulate the arrays or objects. Let's see an example here

```javascript
const books = ["Atomic Habits", "Psychology of Money", "Obstacle is the way"];
const newBooks = books;
console.log(books);
//output: [ 'Atomic Habits', 'Psychology of Money', 'Obstacle is the way' ]
console.log(newBooks);
//output: [ 'Atomic Habits', 'Psychology of Money', 'Obstacle is the way' ]
```

This seems fine so far right. But is it ? Let's see now

```javascript
newBooks.push("Metamorphosis", "Hooked");
console.log(books);
//output:[ 'Atomic Habits', 'Psychology of Money', 'Obstacle is the way', 'Metamorphosis', 'Hooked' ]
```

Wait what? But we didn't even change books array. This happens because arrays are reference types in JavaScript. So its just the reference of books stored in the newbooks. Lets look at how spread operator helps to fix this.

```javascript
const books = ["Atomic Habits", "Psychology of Money", "Obstacle is the way"];
const moreBooks = [...books]; //spread operator
moreBooks.push("Metamorphosis", "Hooked");
console.log(books);
//output: [ 'Atomic Habits', 'Psychology of Money', 'Obstacle is the way' ]
console.log(moreBooks);
//output: [ 'Atomic Habits', 'Psychology of Money', 'Obstacle is the way', 'Metamorphosis', 'Hooked']
```

Read More about other use cases of spread operator here [MDN Spread Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

## 2. Arrow Function

Introduce with ES6 Arrow Functions are the concise and compact implementation of the regular function. Lets have a look at it

```javascript
function firstFunction() {
  console.log("Hey I'm a 'regular' function");
}
firstFunction(); //Hey I'm a 'regular' function

const secondFunction = () => console.log("Hey I'm an 'arrow' function");
secondFunction(); //Hey I'm an 'arrow' function
```

Further Reading:  
Read about various use cases of arrow function here [MDN Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

## 3. Destructing

Destructing assignment makes it easy to extract the value from arrays or properties of objects which can be then used for variable declaration or variable assignment.

#### Array Destructing

```javascript
const array = [1, 3, 5];

//Regular Way
const a = array[0];
const b = array[1];
const c = array[2];

console.log(a, b, c); //1 3 5

//Using Destructing
const [a, b, c] = array;
console.log(a, b, c); // 1 3 5
```

#### Object Destructing

```javascript
//Regular Way
const batman = {
  catchphrase: "I am batman",
  strength: "I am rich",
};
const catchphrase = batman.catchphrase;
const strength = batman.strength;

console.log(catchphrase, strength); // I am batman  I am rich

//Using  Destrcuting
const { catchphrase, strength } = batman;

console.log(catchphrase, strength); // I am batman  I am rich
```

This comes really handy when you are using hooks like useState in React.

```javascript
const [state, setState] = useState(initialState);
```

Read more about destructing here [MDN Destructing Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

## 4. Template Literals

Template Literals or sometimes called template strings are just like string literals but with the power of multiline strings, string formatting and HTML escaping for safe use in HTML. We use backticks with template literals `` (` `) ``. Let's an example then:

```javascript
const username = "James";
const age = 23;
console.log(username + " " + "is" + " " + age + " " + "years old");
//James is 23 years old

//String Formatting using Template Literals
console.log(`${username} is ${age} years old`);
//James is 23 James old
```

Further Reading on Template Literals here [MDN Template Literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

## 5. Basics of Asynchronous JavaScript

Well this is the one where you would like to spend some time reading and understanding the concept of Async JS. Asynchronous Model of JS means it lets multiple things to happen at same time i.e. if it has to wait for a operation to complete meanwhile it execute the rest of program. JavaScript handles this with callbacks. You should have some idea about the following:

- **Callbacks:** A Callback function is a function that is passed into another function as an argument to be executed at later stage. Lets an example below of asynchronous callbacks: ![async.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1629451565961/W5j-cN9Px.png?auto=compress,format&format=webp)

- **Promises:** Promises makes working with callbacks a easier task . Promise is an object that represent the eventual completion or failure of asynchronous operation. In a simpler terms a Promise is an object that returns a value that we are expecting in the future. A promise has three state :
  - Pending
  - Fulfilled
  - Rejected

A promise starts in a pending state which then ends up in other fulfilled state or rejected state. We use **then()** method to schedule a callback which executes when the promise is fulfilled and we use **catch()** method to schedule a callback which executes when the promise is rejected. A **finally()** method is also used to execute the code which we want to execute despite a promise being fulfilled or rejected.

Further Readings:

- [Eloquent JavaScript: Asynchronous Programming](https://eloquentjavascript.net/11_async.html)
- [Callback Hell: A guide to writing asynchronous JavaScript programs](http://callbackhell.com)

### Conclusion:

So now you have learnt about the pre-requisite key essentials before you get started with React. Just to put it out there; Neither do you have to be a pro or know each and every bit of JavaScript beforehand, nor do you have to rush your way through JavaScript to get on React. But I could vouch that getting your basics down first will surely make this journey smooth.  
So in a nutshell, spend some time with JavaScript basics, give enough time to Async JS, make fascinating projects along the way to get some hands on practice. And once you are thorough with all of this; what are you waiting for? Get started with Intro to React already. See you on the other side.

On a different note, this is my first ever blog, so your insights and feedback would mean the world to me. Until then, see you in the next one.
