---
title: Can We Make View Generator for Youtube in Javascript
description: how to get views by creating Javascript program to reload the webpage
date: 2021-08-04
slug: can-we-make-view-generator-for-youtube-in-js
category: blog
image: ../assets/Can We Make View Generator for Youtube in Javascript.webp
---

is it's posible ? Yes, its posilbe to create a javascript program to get view on youtube. its all posible by adding our javascript to the youtube video page so lets do this.

well its not a good idea to increase view by using this solution, but we are able to do that by using the inspact tools of the web browser like chrome or mozila firefox and in other's as well.

## How Its Posible ?

it is posible by using the nodejs and the vanila js as well but in this article i am going to use vanila javascript because its very easy to use and preinstall on our browser there is no need to install this .

if you are using this trick then you need a text or code editor like vs code or sublime and require a little bit knowladge of Javascript.

### How To Do ?

just follow me on this article i am writing everything in step by step process

#### Open Youtube Video Link

first of all you need to open your youtube and then open you youtube video page by simpling click on that

![youtube page link](./youtube-video-page.webp)

then simple ctrl + s to save the complete webpage, simple save it to the desktop we do everything on this file
this file is saved in the HTML formet we write our javaScript code inside the file.

#### Open HTML with Code Editior

the we need to open the HTML file with our code editor i am going to use sublime text, you can use anything which you want.

just right click on the file and choose open with and choose code editior

![youtube html code edit](./youtube-html-code-edit.webp)

at the bottom of the code before the body tag is closing you need to paste the following code

```html
<script>
  window.setInterval("refresh()", 10000);
  // Call a function every 10000 milliseconds
  // (OR 10 seconds).

  // Refresh or reload page.
  function refresh() {
    window.location.reload();
  }
</script>
```

after pasting the code you can see the code look like this bellow

![youtube add javascript](./youtube-add-javascript.webp)

just save the file and then open it with your browser you see something amazing its work like whenever you open the file the webpage is reload in every 10 sec

#### Test

just right click the file and then open it with your browser like Firefox or Chrome and you see the canges

## conclusion

Yes, its posible to do that but i not recommend to do anything because YouTube is really to claver then us they already fix this so nobudy can do this. but if you want to try then you can try the code its works for if it don't work the the youtube is already fix the problem.
