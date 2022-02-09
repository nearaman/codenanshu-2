---
title: File Handling in Serverjs Example
description: File handling in serverjs example, serverjs is simplest library for
  node like express but really easy to use.
date: 2021-09-15
slug: file-handling-in-serverjs-example
category: tutorials
image: ../assets/file-handling-in-serverjs-example.webp
---

Serverjs is one of the easiest and simplest frameworks for Nodejs like express. it is one of the best frameworks that comes with many facilities preinstalled like Socket.io, Batteries on, modern es7, and more. in today's article, we are going to take a look at File handling in Serverjs with some examples.

## File Handling on the network

Files in serverjs are really too easy to use, we can easily get any files for the client-side into our backend in some simples steps.

first, let's take a look at client-side HTML, it looks like this.

```html
<form method="POST" action="/profilepic" enctype="multipart/form-data">
  <input name="profilepic" type="input" />
  <input type="hidden" name="_csrf" value="{{_csrf}}" />
  <input type="submit" value="Send picture" />
</form>
```

here you can see that the client tries to send a photo to the endpoint

now take a look at our backend code written in serverjs

```javascript
const mid = post("/profilepic", (ctx) => {
  // This comes from the "name" in the input field
  console.log(ctx.files.profilepic);
  return redirect("/profile");
});
```

in this code, you can see that we accept the photo using `ctx.files.profilepic`

## File Handling on Server

Serverjs provides a very easy interface to access files of the server it works like a simple function that takes the location of the file and then returns the file.

Send a file to the browser with the correct mime type:

```javascript
server((ctx) => file("user-profile-5674354.png"));
```

It does not accept a name since the user is not prompted for download. It will stream the file, so that no files are read fully into memory.

You can handle errors for this method downstream:

```javascript
server([
  (ctx) => file("user-profile-5674354.png"),
  error((ctx) => {
    console.log(ctx.error);
  }),
]);
```

these are some examples of file handling in serverjs. all of these examples are taken from the [official documentation](https://serverjs.io/documentation/) of the library and don't forget to check out my other amazing [tutorialss](/tutorials/)
