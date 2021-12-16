---
title: "Create Keyboard Shortcut in Javascript"
date: "2021-07-11"
description: "Handling keyboard shortcuts in JavaScript Keyboard shortcuts are not only for desktop applications. You can also create shortcuts for web applications,"
image: ./Handling-keyboard-shortcuts-in-JavaScript.png
slug: "create-keyboard-shortcut-in-javascript"
category: "tutorial"
---

Keyboard shortcuts are not only for desktop applications. You can also create shortcuts for web applications, which can come in handly in your MPA or SPA apps. Read on to find out how to create keyboard shortcuts in JavaScript.

Most applications and programs come packed with keyboard shortcuts that allow you to complete common tasks within their interfaces. Thankfully creating shortcuts within our own projects isn't as difficult as one might think. In this article, I will go over how to create keyboard shortcuts in vanilla JavaScript and how you can take that knowledge and easily implement shortcuts in a React app.

## Registering the Keydown Event

In order to determine which keys a user has pressed, we need to add a listener for the [keydown event](https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event). The object that gets returned from the `keydown` event contains a few useful properties that can be leveraged to register a desired shortcut or hotkey.

1.  **KeyboardEvent.key**

- The [key](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key) property contains the value of the exact key that is pressed by the user. For example, if you were to press the letter "_C_" it would return the character "_C_" as its value. If you were to press the right arrow (==>) the `key` value would be "_ArrowRight_."

_(Check out [Keycode.info](https://keycode.info/) for a convenient tool that allows you to easily visualize JavaScript's keycodes.)_

### Modifier Keys

Since most shortcuts are used in combination with a [modifier key](https://en.wikipedia.org/wiki/Modifier_key) it's helpful to know the properties that are available to be able to detect these particular keys.

1.  **KeyboardEvent.ctrlKey**

    - This [ctrlKey](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/ctrlKey) property returns a `Boolean` indicating whether or not the `Control` key was pressed.

2.  **KeyboardEvent.metaKey**

    - Similarly, the [metaKey](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/metaKey) returns `true` or `false` depending on if the "Meta" key was pressed. For Macs, this is registered as the `Command` key and for Windows computers, this is registered as the "Windows key".

There are many more properties available than the ones listed above, but those are some of the more common ones to use. To see an exhaustive list of the possible keyboard event properties check out the [full list on MDN](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#properties).

# Listening for Shortcuts

Now that we know which event properties we need to reference we can begin to pair them together to form a proper shortcut. Because most shortcuts are used in conjunction with a modifier key, we will use the `ctrlKey` property to create a shortcut that will register `CTRL + S` and `CTRL + C` to recreate the common "Save" and "Copy" actions.

Based on the properties we learned about above, the code for registering these shortcuts would look something like this:

```javascript
window.addEventListener("keydown", (event) => {
  /*Allows for a case-insensitive shortcut*/
  if (event.ctrlKey && (event.key === "S" || event.key === "s")) {
    event.preventDefault();
    alert("Save File 💾");
  }

  if (event.ctrlKey && (event.key === "C" || event.key === "c")) {
    event.preventDefault();
    alert("Copy Selection ✂️");
  }
});
```

# React Example with Hooks ⚓

Conveniently, implementing shortcuts within React is actually pretty similar to doing so within vanilla JavaScript. The main difference is that we have to utilize the [useEffect hook](https://reactjs.org/docs/hooks-reference.html#useeffect) in order to register the side effect and subsequently remove the event listener as a [cleanup](https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup) when the component unmounts.

For example, if we want to register a keydown handler that gets set when a component mounts, it would look something like this:

```javascript
useEffect(() => {
  const handleKeyDown = (event) => {
    if (event.ctrlKey && (event.key === "C" || event.key === "c")) {
      event.preventDefault();
      alert("Copy Selection ✂️");
    }
  };

  window.addEventListener("keydown", handleKeyDown);
  return () => {
    /*removes event listener on cleanup*/
    window.removeEventListener("keydown", handleKeyDown);
  };
}, []);
```

As an alternative, if you want to have your keydown handler defined outside of the `useEffect` because it has its own set of dependencies that it needs to keep track of, you could make use of the [useCallback hook](https://reactjs.org/docs/hooks-reference.html#usecallback) and set it up like so:

```javascript
const handleKeyDown = useCallback(
  (event) => {
    if (event.ctrlKey && (event.key === "S" || event.key === "s")) {
      event.preventDefault();
      alert("Save File 💾");
    }
  },
  [props.someDependency]
);

useEffect(() => {
  window.addEventListener("keydown", handleKeyDown);
  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [handleKeyDown]);
```

### El Fin 👋🏽

As you can see, programming shortcuts into an application is fairly straightforward. Implementing shortcuts provides convenience for users to be able to complete common actions throughout an application.

If you enjoy what you read, feel free to like this article or subscribe to my newsletter, where I write about programming and productivity tips.

As always, thank you for reading, and happy coding!

```

```
