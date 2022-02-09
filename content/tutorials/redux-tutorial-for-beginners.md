---
title: "Redux tutorials For Beginners"
description: "Learn key takeaway skills of Redux and upgrade your react skills with the help of Redux Toolkit"
date: "Sat Dec 18 2021"
image: "./hero.png"
slug: "redux-tutorials-for-beginners"
category: "tutorials"
---

React is one of the most loved JavaScript library to create interactive UI. it grows much faster then the other one like angular or vue its all due the the speed and the community they have. State is one the main concept of any UI framework or library. React provide us a **context API** to handle state on the top level but this is not a good or effective way to do that. so in this tutorials we are going to take a look a Redux tutorials for beginners.

## What is Redux

Redux is a state management library that are able to manage state or able to use with any JS framework like angular or VUE or some other as well. it help programmer to manage state and provide value of state in every components inside the react DOM.

It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.

You can use Redux together with React, or with any other view library. It is tiny (2kB, including dependencies), but has a large ecosystem of addons available

## Installation of Redux

Redux Toolkit is our official recommended package to write Redux logic. it wraps around the Redux core and contains function and classes to write a good Redux app. Redux Toolkit help you to write good redux app

to learn Redux we need to add the redux package to our react app. Redux Toolkit is available as a package on NPM for use with a module bundler or in Node application:

```bash
#NPM
npm install @reduxjs/toolkit redux react-redux

#Yarn
yarn add @reduxjs/toolkit redux react-redux
```

### Create React App

the recommended way to start creating new react app with redux is by using the official Redux + JS template or REdux + TS template
so to create or use these templates in your create react app just use the following commands

```bash
# Redux + Plain JS template
npx create-react-app my-app --template redux

# Redux + TypeScript template
npx create-react-app my-app --template redux-typescript
```

## Basics

What is redux trying to say ? the main thing that redux trying to say is that we are going to create a store where all the data of all state are going to save and whenever a user want that data the the the Redux will give the data and set a callback as well. so whenever the data changes then the the data is changed from everywhere.

so too implement this logic we need to create a store for us

```js
// redux/store.js
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
	reducer: {},
});
```

This creates a Redux store, and also automatically configure the Redux DevTools extension so that you can inspect the store while developing.

### Add Store In App.js

new we need to flow our data in react app so to do that we are going to add store and `provider` in the index.js

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Store from './redux/store' // :add
import { Provider } from 'react-redux' // :add

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider> // :add,
	document.getElementById('root')
)
```

## Create A Redux slice

Add a new file named `src/features/counter/counterSlice.js`. In that file, import the `createSlice` API from Redux Toolkit.

Creating a slice requires a string name to identify the slice, an initial state value, and one or more reducer functions to define how the state can be updated. Once a slice is created, we can export the generated Redux action creators and the reducer function for the whole slice.

```js
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
	name: "counter",
	initialState: {
		value: 0,
	},
	reducers: {
		increment: (state) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
```

if i want to explain the code then its look like this first we are going to import `createSlice` from something and then we are going to `export const counterSlice` with some added state and some reducers.

here are reducers are going export as action and by default we are to export counterSlice.reducer

## Add slice to store

now we need to add slice to the store Next, we need to import the reducer function from the counter slice and add it to our store. By defining a field inside the `reducer` parameter, we tell the store to use this slice reducer function to handle all updates to that state.

```js
// redux/store.js

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export default configureStore({
	reducer: {
		counter: counterReducer,
	},
});
```

## Lets use Data

Now we can use the React-Redux hooks to let React components interact with the Redux store. We can read data from the store with `useSelector`, and dispatch actions using useDispatch. Create a `src/features/counter/Counter.js` file with a <Counter> component inside, then import that component into App.js and render it inside of `<App>`.

```jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<div>
			<div>
				<button
					aria-label="Increment value"
					onClick={() => dispatch(increment())}
				>
					Increment
				</button>
				<span>{count}</span>
				<button
					aria-label="Decrement value"
					onClick={() => dispatch(decrement())}
				>
					Decrement
				</button>
			</div>
		</div>
	);
}
```

now with the help of these hooks and much more we are able to get data from the Redux store and then store it inside the local variable and whenever the state changes the local value will automatically changes
