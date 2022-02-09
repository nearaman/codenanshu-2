---
title: Url Shortener Using Python
description: Hello Techies, In this blog we will be creating a URL shortener
  with Python. that help
date: 2021-09-16
image: ./url-shortener.webp
slug: url-shortener-using-python
category: blog
thumbnail: ../assets/url-shortener.webp
---

Hello Techies, In this blog we will be creating a URL shortener with Python. Let's get Started.

## What is a URL Shortener?

A URL Shortener is used to shorten the long URLs or website links.

### Why URL Shortener?

There are majorly two important things to use a URL Shortener.

Easy Sharing

To track the incoming network traffic.

Prerequisites: We will be using pyshorteners library to shorten the URL

```c
- pyshorteners
```

### installation

```
pip install pyshorteners
```

Let's Code: Step 1: First we will import the library.

```python
import pyshorteners as shr
```

Step 2: Create an object for the `Shortener()` class of pyshorteners library.

```python
shortener = shr.Shortener()
```

Step 3: Take the URL to be shortened as input from the user. You can also give a static URL in the code itself.

```python
URL = input("enter URL:")
```

Step 4: Now the major part comes.

```python
shortened_url = shortener.tinyurl.short(URL)
print(f'Shortened URL {shortened_url}')
```

In the above code, we will make use of tinyurl.short() method of the object shortener we created earlier for the class Shortener(). This method takes the URL as argument and returns the shortened URL. The Shortened URL is stored in shortened_url variable.

You can find the complete updated code on GitHub

Thanks for reading. Happy Learning :)
