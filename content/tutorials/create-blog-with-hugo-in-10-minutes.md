---
title: "Create a Blog With Hugo in 10 Minutes"
date: "2021-08-19"
description: "create a blog with hugo and deploy to github pages for free no need to download wordpress"
image: ./hugo.webp
slug: "create-blog-with-hugo-in-10-minutes"
category: "tutorials"
---

hugo 👋🏼 is one of the most powerful open source static site generator with its amazing speed and flexibility.

this is the only static site generator which i love the most especially i created my own website by using this framework in today's article we are going to build 🧑🏼‍💻 a blog with this hugo framework and upload it to github pages for free.

so let's get started to install hugo we need to we just type

```
sudo apt-install hugo
```

and this will install hugo for you i already installed hugo in my system

and there is a spoiler alert if you are using windows then you need to be search for and download it for your system.

type hugo version command to check the version of your hugo which is installed in your system.

now this is the time to create our website type hugo new site and the name of your website so this will create a website for you i typing blog and this is say congratulations your new hugo site is created in this location.

i will suguest to watch this video to get all the info 👇

after then you need to open that location with code editor. i am going to open that folder with sublime text and once you open the folder you can see a `config.toml` here are configration of our website is located.

here you can see `baseurl` and `languagetype` and the `title` of your website.

now we have our site 🕵️, we need to download a theme for our website so to download theme go to [hugo themes](https://themes.gohugo.io) and you can lots of themes are avilable to use.

we are going to use [aether](https://themes.gohugo.io/themes/aether/) just click on the download button and you will redirect to the github repo page now you need to just copy the url of the github pages and came back to the terminal 👓.

once you came to the terminal you need to first `git init` the folder the folder became a github repo. after that you need to just type `git submodule add https://themes.gohugo.io/themes/aether/ themes/aether` so by using this command we are going to add this theme as submodule of are website 🌎.

once you add theme you need to mount the theme, so to mount the theme open `config.toml` and add a line `theme="aether"` this will mount the theme and now if you type hugo server command then the website open with a brand new look 👀.

now just follow the upper 👆 video to get all information about that then you are able to create content and host on github pages.

thanks you reading. 😀
