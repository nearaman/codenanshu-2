---
title: "Learn All Hooks in React In One tutorials"
description: "all 7 hooks of react are covered in one tutorials like useState, useEffect, useMemo and much more"
date: "Sun Dec 12 2021"
image: "./hero.png"
slug: "learn-all-hooks-of-react-in-one-article"
category: "tutorials"
---

Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. Today we'll learn about the widely used hooks in React. First, let me tell you the need for hooks. As we all know React has functional and class components. Previously, the functional components were only used to render the data but didn't consist of the business logic or any side effect in itself.

So hooks were introduced to implement life cycle methods and states in functional components. They also bought the idea of code re-usability along with them, that's why it was so quickly accepted within the React Community.

## Why Hooks ?

We know that components and top-down data flow help us organize a large UI into small, independent, reusable pieces. However, we often can’t break complex components down any further because the logic is stateful and can’t be extracted to a function or another component. Sometimes that’s what people mean when they say React doesn’t let them “separate concerns.”

These cases are very common and include animations, form handling, connecting to external data sources, and many other things we want to do from our components. When we try to solve these use cases with components alone, we usually end up with:

    Huge components that are hard to refactor and test.
    Duplicated logic between different components and life cycle methods.
    Complex patterns like render props and higher-order components.

We think Hooks are our best shot at solving all of these problems. Hooks let us organize the logic inside a component into reusable isolated units

Drum rolls 🥁

Let's move ahead with the main topic.

### useState Hooks ♻️

This hook helps us to use and maintain a state within the functional component. It's very easy to use. The useState hook returns an array having two elements, the first one is the state variable and the second is the function that modifies the state variable.

```jsx
import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setNumber(number - 1)}>Subtract</button>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setNumber(number + 1)}>Add</button>
    </div>
  );
}
```

Here, we have `number` as the state variable and `setNumber` as the function which will modify the number.

`Number` return the value in current state just like we use the `number` in input tag in above code.

`setNumber` is a function which is responsible to set value in the state any value that you pass as argument in the function is going in the state and component is going to re render and the value of `number` is updated. to learn more read [React Blog](https://reactjs.org/docs/hooks-state.html)

### useEffect hook ✋

This hook works as a replacement for all the lifecycle methods which were used in class components. It contains a callback and a dependencies array. The hook will run every time when any of the values in the dependencies array changes.

```jsx
import { useEffect, useState } from "react";

export default function App() {
  const [number, setNumber] = useState(0);
  const [isEven, toggleEven] = useState(true);

  useEffect(() => {
    if (number % 2 !== 0) {
      toggleEven(false);
    } else {
      toggleEven(true);
    }
  }, [number]);

  return (
    <div className="App">
      <button onClick={() => setNumber(number - 1)}>Subtract</button>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setNumber(number + 1)}>Add</button>
      <p>{isEven ? "Even" : "Odd"}</p>
    </div>
  );
}
```

this hooks run after component is mount on UI

Here as you can see, the dependencies array contains `number`. So every time the user presses any of the buttons or changes the input value, the `useEffect` hook will trigger and it'll check the number whether it's odd or even.

Within this hook, you can call side effects such as changing something in DOM, fetching data from an API, etc.

One more thing used in this hook is the cleanup function, which runs when we return a function in the callback. This function helps in cleaning of side effects i.e clearing a timer, closing a web socket, etc.

### useContext hook 🍡

As in the class components, we had the _Context API_ in the same way, we have `useContext` hook in functional components. This hook basically helps you to maintain a common global state across components. When the state changes it triggers re-renders across all the child components under the Context, even if the parent component uses `shouldComponentUpdate` or `React.memo.`

This hook can be used to implement a loading state within the application, passing data to children components, etc.

To create it, we use the `createContext` function and pass the initial value. In the context provider, we pass a prop called `value` which consists of the context variables and functions to modify the context.

```jsx
import { createContext } from "react";

export const UserContext = createContext({
  name: "Initial Name",
});
```

Then we use this context in our Parent Component and wrap our app inside the Context Provider and pass a value. So now all the child components have the access to the `value` prop.

```jsx
import { useContext, useState } from "react";
import Person from "./Person";
import { UserContext } from "./Context";

export default function App() {
  const user = useContext(UserContext);

  const [person, togglePerson] = useState(user);

  return (
    <UserContext.Provider value={[person, togglePerson]}>
      <div className="App">Hello {user.name}!</div>
      <Person />
    </UserContext.Provider>
  );
}
```

Now in the child component `Person` we can access the `value` prop and we can change the context value too.

```jsx
import { useContext } from "react";
import { UserContext } from "./Context";

function Person() {
  const [person, togglePerson] = useContext(UserContext);

  return (
    <div>
      Person: {person.name}
      <button
        onClick={() => {
          togglePerson({ name: "Stuart Little" });
        }}
      >
        Change
      </button>
    </div>
  );
}

export default Person;
```

This way you can use the useContext hook. Make a context, wrap the parent component with the context's provider and you are good to go!

You can experiment with the above code [here](https://codesandbox.io/s/usecontext-hook-zuoxi).

### useReducer hook 🧪

If you know Redux then you already what this hook does, if not then simply it changes the `state` according to the `action` passed. It helps in maintaining a local state easily whereas in Redux we can do that globally.

To use the reducer globally, we can make a context and pass it across the components. Geddit!

Here we have an initial state and a dispatch to modify the state. Within the dispatch, we pass actions along with some info called `payload`. The action then goes to the reducer which in turn changes the state.

```jsx
import { useReducer } from "react";
import "./styles.css";

const initialState = [
  {
    name: "Mad Angles",
    quantity: 5,
  },
  {
    name: "Pringles",
    quantity: 3,
  },
  {
    name: "Lays",
    quantity: 2,
  },
  {
    name: "Kurkure",
    quantity: 1,
  },
  {
    name: "Uncle Chips",
    quantity: 9,
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter((_, index) => index !== action.payload);
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <ul>
        {state.map(({ name, quantity }, index) => (
          <div className="list-item">
            <li key={name}>
              <b>{name}</b> - {quantity}
            </li>
            <button
              onClick={() => {
                dispatch({ type: "delete", payload: index });
              }}
            >
              delete
            </button>
          </div>
        ))}
        <button
          onClick={() => {
            dispatch({
              type: "add",
              payload: {
                name: "Doritoes",
                quantity: 5,
              },
            });
          }}
        >
          add
        </button>
      </ul>
    </div>
  );
}
```

You can find the above code [here](https://codesandbox.io/s/github/deepansh946/use-reducer-example/tree/main/?file=/src/App.js).

That's it for now. There are other hooks too like `useRef`, `useCallback` but they are rarely used.

### useCallback 📞

```jsx
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

Returns a [memoized](https://en.wikipedia.org/wiki/Memoization) callback.

Pass an inline callback and an array of dependencies. `useCallback` will return a memoized version of the callback that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders (e.g. `shouldComponentUpdate`).

`useCallback(fn, deps)` is equivalent to `useMemo(() => fn, deps)`.

> Note
>
> The array of dependencies is not passed as arguments to the callback. Conceptually, though, that’s what they represent: every value referenced inside the callback should also appear in the dependencies array. In the future, a sufficiently advanced compiler could create this array automatically.
>
> We recommend using the [`exhaustive-deps`](https://github.com/facebook/react/issues/14920) rule as part of our [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks#installation) package. It warns when dependencies are specified incorrectly and suggests a fix.

### usememo

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

Returns a [memoized](https://en.wikipedia.org/wiki/Memoization) value.

Pass a “create” function and an array of dependencies. `useMemo` will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render.

Remember that the function passed to `useMemo` runs during rendering. Don’t do anything there that you wouldn’t normally do while rendering. For example, side effects belong in `useEffect`, not `useMemo`.

If no array is provided, a new value will be computed on every render.

**You may rely on `useMemo` as a performance optimization, not as a semantic guarantee.** In the future, React may choose to “forget” some previously memoized values and recalculate them on next render, e.g. to free memory for offscreen components. Write your code so that it still works without `useMemo` — and then add it to optimize performance.

> Note
>
> The array of dependencies is not passed as arguments to the function. Conceptually, though, that’s what they represent: every value referenced inside the function should also appear in the dependencies array. In the future, a sufficiently advanced compiler could create this array automatically.
>
> We recommend using the [`exhaustive-deps`](https://github.com/facebook/react/issues/14920) rule as part of our [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks#installation) package. It warns when dependencies are specified incorrectly and suggests a fix.

### useref

```jsx
const refContainer = useRef(initialValue);
```

`useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument (`initialValue`). The returned object will persist for the full lifetime of the component.

A common use case is to access a child imperatively:

```jsx
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

Essentially, `useRef` is like a “box” that can hold a mutable value in its `.current` property.

You might be familiar with refs primarily as a way to [access the DOM](https://reactjs.org/docs/refs-and-the-dom.html). If you pass a ref object to React with `<div ref={myRef} />`, React will set its `.current` property to the corresponding DOM node whenever that node changes.

However, `useRef()` is useful for more than the `ref` attribute. It’s [handy for keeping any mutable value around](https://reactjs.org/docs/hooks-faq.html#is-there-something-like-instance-variables) similar to how you’d use instance fields in classes.

This works because `useRef()` creates a plain JavaScript object. The only difference between `useRef()` and creating a `{current: ...}` object yourself is that `useRef` will give you the same ref object on every render.

Keep in mind that `useRef` _doesn’t_ notify you when its content changes. Mutating the `.current` property doesn’t cause a re-render. If you want to run some code when React attaches or detaches a ref to a DOM node, you may want to use a [callback ref](https://reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node) instead.

### useimperativehandle

```jsx
useImperativeHandle(ref, createHandle, [deps]);
```

`useImperativeHandle` customizes the instance value that is exposed to parent components when using `ref`. As always, imperative code using refs should be avoided in most cases. `useImperativeHandle` should be used with [`forwardRef`](https://reactjs.org/docs/react-api.html#reactforwardref):

```jsx
function FancyInput(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return <input ref={inputRef} ... />;
}
FancyInput = forwardRef(FancyInput);
```

In this example, a parent component that renders `<FancyInput ref={inputRef} />` would be able to call `inputRef.current.focus()`.

### uselayouteffect

The signature is identical to `useEffect`, but it fires synchronously after all DOM mutations. Use this to read layout from the DOM and synchronously re-render. Updates scheduled inside `useLayoutEffect` will be flushed synchronously, before the browser has a chance to paint.

Prefer the standard `useEffect` when possible to avoid blocking visual updates.

> Tip
>
> If you’re migrating code from a class component, note `useLayoutEffect` fires in the same phase as `componentDidMount` and `componentDidUpdate`. However, **we recommend starting with `useEffect` first** and only trying `useLayoutEffect` if that causes a problem.
>
> If you use server rendering, keep in mind that _neither_ `useLayoutEffect` nor `useEffect` can run until the JavaScript is downloaded. This is why React warns when a server-rendered component contains `useLayoutEffect`. To fix this, either move that logic to `useEffect` (if it isn’t necessary for the first render), or delay showing that component until after the client renders (if the HTML looks broken until `useLayoutEffect` runs).
>
> To exclude a component that needs layout effects from the server-rendered HTML, render it conditionally > with `showChild && <Child />` and defer showing it with
> This way, the UI doesn’t appear broken before hydration.

### usedebugvalue

```javascript
useDebugValue(value);
```

`useDebugValue` can be used to display a label for custom hooks in React DevTools.

For example, consider the `useFriendStatus` custom Hook described in [“Building Your Own Hooks”](https://reactjs.org/docs/hooks-custom.html):

```jsx
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  // ...

  // Show a label in DevTools next to this Hook  // e.g. "FriendStatus: Online"
  //  useDebugValue(isOnline ? 'Online' : 'Offline');
  return isOnline;
}
```

> Tip
>
> We don’t recommend adding debug values to every custom Hook. It’s most valuable for custom Hooks that are part of shared libraries.

thank you to read this article i hope your all dough are clean if any thing i missed then please inform me at [twitter](https://twitter.com/aianshume) otherwise please contribute your suggestion on [github](https://guthub.com/aianshume/codenanshu)
